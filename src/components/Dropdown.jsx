import "../styles/dropdown.css";

export default function Dropdown({children, text}) {
  return (
    <div class="dropdown">
      <button class="dropbtn">{text}</button>
      <div class="dropdown-content">
        {children}
      </div>
    </div>
  );
}
