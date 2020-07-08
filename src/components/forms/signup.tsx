/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Input, Textarea, Button, Label } from "theme-ui";
import { useForm } from "react-hook-form";
import { navigate } from "gatsby";
const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
 
};

const SignupForm: React.FC = () => {
  const { register, errors, handleSubmit } = useForm<FormData>({
    mode: "onBlur",
  });
  const onSubmit = handleSubmit((data, e) => {
    //alert(JSON.stringify(data));
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
      className="w-full"
      onSubmit={onSubmit}
    >
      <Input type="hidden" name="form-name" value="contact-form"></Input>
      <Input type="hidden" name="bot-field"></Input>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6">
          <Label htmlFor="name">First Name</Label>
          <Input
            ref={register({
              required: { value: true, message: "First Name is required" },
              minLength: { value: 2, message: "First Name is too short" },
            })}
            id="firstName"
            name="firstName"
            placeholder="Your First Name"
          />
          {errors.firstName && (
            <p sx={{ variant: "forms.validationError" }}>
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="w-full  px-3 mb-6">
          <Label htmlFor="name">Last Name</Label>
          <Input
            ref={register({
              required: { value: true, message: "Last Name is required" },
              minLength: { value: 2, message: "Last Name is too short" },
            })}
            id="lastName"
            name="lastName"
            placeholder="Your Last Name"
          />
          {errors.lastName && (
            <p sx={{ variant: "forms.validationError" }}>
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div className="w-full px-3 mb-6">
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

        <div className="px-3 mb-6 md:mb-0">
          <Button type="submit" variant="primary">
            Send
          </Button>
        </div>
      </div>
    </form>
  );
};
export default SignupForm;
