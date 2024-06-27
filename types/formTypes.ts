export type RecordType = Record<string, unknown>;
export type ErrorType = Record<string, any | any[]>;
import { InertiaForm } from "@inertiajs/vue3";
import type { Ref } from "vue";
import { customError } from "@/lib/customError";

export type FormModelType = {
    field: null | string;
    data: RecordType;
    rules: RecordType;
    errors: ErrorType;
};

export interface TypeRule {
    [attribute: string]: any | Array<any>;
}

export interface TypeData {
    [attribute: string]: any | Array<any>;
}

export type Tranformtype = (data: RecordType) => object;

export type OnEvent = (data: RecordType) => void;

export type OnChange = (data: { key: string; value: any }) => void;

export type SubmitPanding = (data: {
    lazy: Ref<boolean>;
    errors: customError;
}) => void;

export interface FormPassword {
    current_password: string;
    new_password: string;
    new_password_confirmation: string;
}

export interface FormConfig {
    automatic_mode: boolean;
    dark_mode: boolean;
    online_status: boolean;
    private_compte: boolean;
    email_show: boolean;
}

export interface FormAccount {
    email: string;
    username: string;
    first_name: string;
    last_name: string;
}

export interface FormRegister {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    terms: boolean;
}

export interface ForgotPasswordRegister {
    email: string;
}

export interface ConfirmPassword {
    password: string;
}

export interface CodeType {
    code: string;
}

export interface ResetPasswordRegister {
    email: string;
    token: string;
    password: string;
    password_confirmation: string;
}

export interface UseFormOptions {
    data: TypeData;
    rules: TypeRule;
    url: string;
    method: "get" | "post" | "put" | "patch" | "delete";
    submitPanding?: SubmitPanding;
    transform: (data: RecordType) => object;
    onFinish: (data: RecordType) => void;
    onSuccess: (data: RecordType) => void;
    onError: (errors: RecordType) => void;
    onClose: () => void;
}

export interface UseFormReturn {
    errors: customError;
    lazy: Ref<boolean>;
    onCancel: () => void;
    onSubmit: () => void;
    onChange: OnChange;
}

export type UseFormType = (options: Partial<UseFormOptions>) => UseFormReturn;

export type FormLogin = {
    email: string;
    password: string;
    remember: boolean;
};

export interface typeRule {
    [attribute: string]: any | Array<any>;
}

export type RuleLogin = {
    email: string[] | string;
    password: string[] | string;
};

export type RuleRegister = {
    username: string[] | string;
    email: string[] | string;
    password: string[] | string;
};

export type InertiaLoginForm = InertiaForm<FormLogin>;

export type InputType =
    | "text"
    | "number"
    | "email"
    | "password"
    | "search"
    | "url"
    | "tel"
    | "date"
    | "time"
    | "range"
    | "color";

export interface AxiosErrorType {
    message: string;
    errors: {
        [key: string]: string[];
    };
}