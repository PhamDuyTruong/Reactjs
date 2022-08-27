
// import Header from './components/Header.js';
// import Footer from './components/Footer.js';
// import Sidebar from './components/Content.js';
// import Content from './components/Sidebar.js'

// import DemoReactjs  from './DemoReactjs';
// import DataBindingClass from './DataBinding/DataBindingClass';
// import DataBindingFunction from './DataBinding/DataBindingFunction';
// import EventClass from './HandleEvent/index'
// import ConditionClass from './Condition/index'
// import ListClass from './Lists/index'
// import StateClass from './State/index'
// import DemoCar from './BaiTap2/DemoCar'
// import Parent from './Props/Parent'
// import BaiTap3 from './BaiTap3'
// import BaiTapGioHang from './BaiTapGioHang/BaiTapGioHang';
// import Lifecycle from './LifeCycle';
// import UserManagement from './UserManagement';
// import State from './hooks/State';
// import Lifecycle from './hooks/Lifecycle';
// import DemoHook from './hooks/DemoHook';
import BauCua from './BauCua'
// import DemoRedux from './DemoRedux';
import TodoList from './TodolListRedux';
import QuanLyKhoaHoc from './QuanLyKhoaHoc';
import DemoRouter from './DemoRouter';
import NestedRouter from './DemoRouter/NestedRouter';
// JSX : Javasript XML = Kết hợp javasript với html lại với nhau


// Component app: Tái sử dụng giao diện 
// SPA: Uu điểm : tăng tính tương tác 
// Nhược điểm : Kém SEO 
// SET UP react-router-dom
import{BrowserRouter, Route, Switch} from "react-router-dom";
function App() {
  return (
    // Cơ chế so sánh của path với url là chỉ so sánh cái đầu thì nó sẽ ăn luôn tất cả path khác
    // Để khắc phục nhược điểm của path thì ta sử dụng switch giống như switch case, nó sẽ render ra tất cả component, nếu muốn chỉ renderra 1 component ta bọc các route với Switch
    // Exact: Thông thường path ="\" sẽ khớp với tất cả url, để khắc phục ta thêm exact lức này nó sẽ so sánh url khớp 100% MỚI HIỂN THI RA GIAO DIỆN
    <BrowserRouter>
    <Switch>
      {/* Demo router */}
      <Route path="/" exact component={DemoRouter} />
      <Route path="/movie/:movieId" exact component={DemoRouter} />

      {/* Demo props NestedRouter */}
      <Route path="/topics">
        <NestedRouter />
      </Route>


      {/* Cách 1: Dùng props component */}
      <Route path="/courses"  component={QuanLyKhoaHoc} />
      {/* Cách 3: Dùng props render */}
      <Route path="/baucua" render={(routerProps) =>{
        return <BauCua {...routerProps} />
      }} />
      {/* Cách 2: Dùng children */}
      <Route path="/todo-list">
          <TodoList />
      </Route>
      <Route>
                    <div>Page not found</div>
       </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
