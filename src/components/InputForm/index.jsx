import { Input } from "@mui/base";
import "./style.css";

function InputForm() {
  return (
    <div className="contact-info-container">
      {/* Input Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Input
        slotProps={{ root: { className: "flex-row-with-text" }, input: { className: "transparent-input-style transparent-input-style::placeholder", placeholder: "Главная страница", type: "text" } }}
      />
      {/* Input Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Input slotProps={{ root: { className: "flex-row-with-text" }, input: { className: "transparent-input-style transparent-input-style::placeholder", placeholder: "О сервисе", type: "text" } }} />
      {/* Input Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Input slotProps={{ root: { className: "flex-row-with-text" }, input: { className: "transparent-input-style transparent-input-style::placeholder", placeholder: "Партнерам", type: "text" } }} />
      {/* Input Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Input slotProps={{ root: { className: "flex-row-with-text" }, input: { className: "transparent-input-style transparent-input-style::placeholder", placeholder: "Вход", type: "text" } }} />
    </div>
  );
}

export default InputForm;
