import "../styles/dropdown.css";

export default function Dropdown() {
  return (
    <div class="dropdown">
      <button class="dropbtn">Works</button>
      <div class="dropdown-content">
        <a href="#">Option 1</a>
        <a href="#">Option 2</a>
        <a href="#">Option 3</a>
      </div>
    </div>
  );
}
