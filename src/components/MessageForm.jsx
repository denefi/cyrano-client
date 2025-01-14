import Textarea from "./Textarea";
import Inputfield from "./Inputfield";
import CustomForm from "./CustomForm";
function MessageForm(props) {
  return (
    <CustomForm onSubmit={props.submitMessage}>
      <Textarea
        className="my-4"
        label="Message"
        name="encryptedContent"
        placeholder="say something …"
        value={props.message}
        onChange={(e) => {
          props.setMessage(e.target.value);
        }}
        type="text"
        required
      />{" "}
      <Inputfield
        className="my-4"
        label="Password"
        name="password"
        placeholder={props.password}
        value={props.password}
        onChange={(e) => {
          props.setPassword(e.target.value);
        }}
      />
    </CustomForm>
  );
}

export default MessageForm;
