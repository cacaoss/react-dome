import _Form from "./components/Form"
import Field from "./components/Field"
import Input from "./components/Input";
import {useForm} from "./hooks/useForm"

const Form = _Form;
Form.useForm = useForm;

export {Form, Field, Input}