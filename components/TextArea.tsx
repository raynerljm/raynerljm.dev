import { Dispatch, FC, SetStateAction } from "react";

type Props = {
    label?: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    required?: boolean;
};

const TextArea: FC<Props> = ({ label, value, setValue, required = false }) => {
    return (
        <div className="flex w-full flex-col gap-2">
            <label
                className="ml-1 w-full font-light text-tertiary"
                htmlFor={label}
            >
                {label}
            </label>
            <textarea
                id={label}
                rows={3}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                required={required}
                className="w-full rounded-lg border-2 border-dark-2 border-opacity-70 bg-dark-2 font-light text-tertiary hover:border-tertiary"
            />
        </div>
    );
};
export default TextArea;
