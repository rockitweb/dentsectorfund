/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Input, Textarea, Button, Label } from "theme-ui";
import { useForm } from "react-hook-form";
import { navigate } from "gatsby";
//import addToMailchimp from "gatsby-plugin-mailchimp";
const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const { register, errors, handleSubmit } = useForm<FormData>({
    mode: "onBlur",
  });
  const onSubmit = handleSubmit((data, e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...data }),
    })
      .then(() => {
        e?.target.reset();
        navigate("/thanks/");
      })
      .catch(() => {
        alert("Error");
      });
    //.finally(() => e?.target.setSubmitting(false));
  });

  return (
    <form
      name="contact-form"
      data-netlify={true}
      data-netlify-honeypot={true}
      className="w-full max-w-lg"
      onSubmit={onSubmit}
    >
      <Input type="hidden" name="form-name" value="contact-form"></Input>
      <Input type="hidden" name="bot-field"></Input>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Label htmlFor="name">Your Name</Label>
          <Input
            ref={register({
              required: { value: true, message: "Name is required" },
              minLength: { value: 2, message: "Name is too short" },
            })}
            id="name"
            name="name"
            placeholder="Your Name"
          />
          {errors.name && (
            <p sx={{ variant: "forms.validationError" }}>
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6">
          <Label htmlFor="email">Your Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            ref={register({
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email",
              },
            })}
          />

          {errors.email && (
            <p sx={{ variant: "forms.validationError" }}>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="w-full px-3 mb-6">
          <Label htmlFor="message">Your Message</Label>
          <Textarea
            name="message"
            id="message"
            placeholder="What's on your mind?"
            ref={register({
              required: { value: true, message: "Message is required" },
              minLength: { value: 2, message: "Message is too short" },
            })}
          />
          {errors.message && (
            <p sx={{ variant: "forms.validationError" }}>
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="px-3 mb-6 md:mb-0">
          <Button type="submit" variant="primary">
            Send
          </Button>
        </div>
      </div>
    </form>
  );
};
export default ContactForm;
