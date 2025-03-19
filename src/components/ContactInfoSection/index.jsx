import { Input } from "@mui/base";
import "./style.css";

function ContactInfoSection() {
  return (
    <div className="contact-info-container">
      <a href="mailto:info@studmart.ru" className="email-link-style">
        info@studmart.ru
      </a>
      <a href="mailto:support@studmart.ru" className="email-link-style1">
        support@studmart.ru
      </a>
      {/* Input Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Input
        slotProps={{ root: { className: "flex-row-with-text" }, input: { className: "transparent-input-style transparent-input-style::placeholder", placeholder: "+7 (495) 147-10-69", type: "text" } }}
      />
      {/* Input Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Input
        slotProps={{ root: { className: "flex-row-with-text" }, input: { className: "transparent-input-style transparent-input-style::placeholder", placeholder: "+7 919 944-43-78", type: "text" } }}
      />
    </div>
  );
}

export default ContactInfoSection;
