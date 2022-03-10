import sendgrid from "@sendgrid/mail";
import { EMAIL } from "../../lib/constants";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

async function sendEmail(req, res) {
    console.log(req);
    try {
        // console.log("REQ.BODY", req.body);
        await sendgrid.send({
            to: EMAIL, // Your email where you'll receive emails
            from: EMAIL, // your website email address here
            subject: `[Important] Received contact from portfolio website regarding ${req.body.subject}`,
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
          <h1>Hey Rayner, you've received a contact submission from your portfolio website!</h1>
          <p>Name: ${req.body.name}</p>
          <p>Email: ${req.body.email}</p>
          <p>Subject: ${req.body.subject}</p>
          <p>Message: ${req.body.message}</p>
      </body>
      </html>`,
        });
    } catch (error: any) {
        // console.log(error);
        return res
            .status(error.statusCode || 500)
            .json({ error: error.message });
    }

    return res
        .status(200)
        .json({ error: "", message: "Successfully sent email" });
}

export default sendEmail;
