import { Dispatch, FC, SetStateAction } from "react";

type Props = {
    label?: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    required?: boolean;
    type?: string;
};

const TextBox: FC<Props> = ({
    label,
    value,
    setValue,
    required = false,
    type = "text",
}) => {
    return (
        <div className="flex w-full flex-col gap-2">
            <label
                className="ml-1 w-full font-light text-tertiary"
                htmlFor={label}
            >
                {label}
            </label>
            <input
                id={label}
                type={type}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                required={required}
                className="w-full rounded-lg border-2 border-dark-2 border-opacity-70 bg-dark-2 font-light text-tertiary hover:border-tertiary"
            />
        </div>
    );
};
export default TextBox;
