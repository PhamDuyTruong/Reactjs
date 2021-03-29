import React, { useState } from "react";

// UseState: hàm tạo state trong function component
export default function State() {
  //const [Gía trị state, hàm thay đổi giá trị state] = useState(giá trị khởi tạo)
  const [count, setCount] = useState(0);
  // Có thể tạo ra nhiều state bằng cách gọi hàm useState, không bị bó buộc trong object state như class Component
  const [color, setColor] = useState("red");
  //State là array
  const [products, setProduct] = useState(["Iphone 12", "SamSung S21"]);
  // State là object
  const [form, setForm] = useState({ username: "", email: "" });

  const handleIncrement = () => {
    // Hàm setCount nhận vào 1 giá trị, và giá trị đó sẽ được cấp nhật cho biến count
    setCount(count + 1);
  };
  const handleChangeColor = () => {
    const colors = ["red", "green", "yellow", "purple", "blue"];
    const random = Math.floor(Math.random() * 4);
    setColor(colors[random]);
  };
  const handleAddProduct = () => {
    // Cách 1: Sao chép mảng products và thêm phần tử vào
    // Cách 2: dùng hàm callback khi setProduct
    setProduct((state) => {
      return [...state, "Xiaomi mi 10"];
    });
  };

  const handleChange =(evt)=>{
      const {name, value}= evt.target;
      setForm((form)=>{
          return{
              ...form,
              [name] :value
          }
      })

  }
  return (
    <div>
      <h3>Demo Count</h3>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Click</button>
      <h3>Demo Color</h3>

      <p>Color: {color}</p>
      <button onClick={handleChangeColor}>Change color</button>

      <h3>Demo Products</h3>
      <p>{products.join(", ")}</p>
      <button onClick={handleAddProduct}>Add Product</button>


      <h3>Demo Form</h3>
        <div classname="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value ={form.username}
            classname="form-control"
            onChange = {handleChange}
          />
        </div>
        <div classname="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value ={form.email}
            classname="form-control"
            onChange = {handleChange}
          />
        </div>
    </div>
  );
}
