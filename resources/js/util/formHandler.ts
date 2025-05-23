import { toast } from "sonner";

interface Notification {
    title?: string;
    message: string;
    type: 'success' | 'info' | 'warning' | 'error';
}

interface FormProps {
    notification?: Notification;
    [key: string]: any;
}

interface SubmitParams {
    props?: FormProps;
    [key: string]: any;
}

interface SubmitHooks {
    onSuccessCallback?: (params: SubmitParams) => void;
    onErrorCallback?: (params: SubmitParams) => void;
}

interface Form {
    submit: (
        method: string,
        url: string,
        options: {
            onSuccess?: (params: SubmitParams) => void;
            onError?: (params: SubmitParams) => void;
        }
    ) => void;
    reset: () => void;
    errors: Record<string, string>;
}

export function useFormHandler(form: any) {
    function submit(method: string, url: string, hooks: SubmitHooks = {}) {
        form.submit(
            method.toLowerCase(),
            url,
            {
                onSuccess: (params: any) => handleSuccess(params, hooks.onSuccessCallback),
                onError: (params: any) => handleError(params, hooks.onErrorCallback)
            }
        );
    }

    function handleSuccess(params: SubmitParams, onSuccessCallback?: (params: SubmitParams) => void) {
        if (params?.props?.notification) {
            params.props.notification.title = params.props.notification.type === 'error' ? 'Fehler' : 'Info';
            setMessage(params.props.notification);
        }

        if (onSuccessCallback) {
            onSuccessCallback(params);
        }
    }

    function handleError(params: SubmitParams, onErrorCallback?: (params: SubmitParams) => void) {
        if (params?.props?.notification) {
            params.props.notification.title = 'Fehler';
            setMessage(params.props.notification);
        }

        if (onErrorCallback) {
            onErrorCallback(params);
        }
    }

    function setMessage(data: Notification) {
        if(data.type === 'success') {
            toast.success(data.message);
        }
        else if(data.type === 'error') {
            toast.error(data.message);
        }
        else if(data.type === 'warning') {
            toast.warning(data.message);
        }
    }

    function resetForm() {
        form.reset();
        form.errors = {};
    }

    return {
        submit,
        resetForm
    };
}
