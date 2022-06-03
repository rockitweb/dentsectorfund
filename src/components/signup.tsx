/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import SignupForm from "./forms/signup";
import { Markdown } from "./interfaces/markdown";
import SectionHeading from "./section-heading";

export interface SignupProps {
    formHeading: string | Markdown,
    social: string[]
}

const SignUp: React.FC<SignupProps> = ({formHeading, social}) => {
  return (
        <section sx={{variant:"layout.container.narrow"}}>
            <SectionHeading heading={formHeading} description=""></SectionHeading>
      <div id="signupform" sx={{ justifyContent: `center` }}>
        {/*<SignupForm></SignupForm>*/}
      </div>
</section>
  );
};
export default SignUp;
