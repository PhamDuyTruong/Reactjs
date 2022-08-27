import React from 'react'
import {Switch, Route, Link, useRouteMatch} from 'react-router-dom'
export default function NestedRouter() {
    const { path } = useRouteMatch();
    return (
        <div>
            <h1>Demo nested router</h1>
            {/* Uư điểm của Link là ngăn chặn load lại trang */}
            <ul>
                <li>
                    <Link to={`${path}/react`}>React</Link>
                </li>
                <li>
                    <Link to="/topics/angular">Angular</Link>
                </li>
                <li>
                    <Link to="/topics/vue">Vue</Link>
                </li>
            </ul>


            <Switch>
                <Route path="/topics/react" exact>
                    <h3>React</h3>
                </Route>
                <Route path="/topics/angular">
                    <h3>Angular</h3>
                </Route>
                <Route path="/topics/vue">
                    <h3>Vue</h3>
                </Route>
                {/* Để page NOT FOUND ở dưới cùng, để đảm bảo đi qua tất cả route khác, không tìm thấy sẽ chạy cái cuối */}
               
            </Switch>
        </div>
    )
}
