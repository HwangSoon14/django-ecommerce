import * as yup from "yup";
import { REGEX } from "@/constants/regex";

yup.addMethod(yup.string, "password", function (message) {
  return this.matches(REGEX.PASSWORD, {
    message,
    excludeEmptyString: true,
  });
});

yup.addMethod(yup.string, "onlyNumber", function (message) {
  return this.matches(REGEX.ONLY_NUMBER, {
    message,
    excludeEmptyString: true,
  });
});

export default yup;
