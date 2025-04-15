import React, { useState } from "react";
import { Layout, Menu, Card, Spin, message, Button } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import Foodrecipe from "./Foodrecipe";
import Userdata from "./Userdata";
import Qoutes from "./Qutes";
import ResultForm from "./ResultFrom";

const { Header, Content, Footer, Sider } = Layout;
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [qoute, setqoutes] = useState([]);
  const [accessToken] = useLocalStorageState("accessToken", "");
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  const navigate = useNavigate();
  const employe = [[{"employee_id":1,"department":"Engineering","salary":101760.33,"hire_date":"9/19/2010","software_experience_years":15.2},
    {"employee_id":2,"department":"Sales","salary":107344.45,"hire_date":"10/29/2014","software_experience_years":11.7},
    {"employee_id":3,"department":"Product","salary":134636.8,"hire_date":"8/23/2017","software_experience_years":16.2},
    {"employee_id":4,"department":"Engineering","salary":96208.28,"hire_date":"9/15/2019","software_experience_years":17.2},
    {"employee_id":5,"department":"Sales","salary":124859.03,"hire_date":"11/11/2015","software_experience_years":1.3},
    {"employee_id":6,"department":"Marketing","salary":118249.13,"hire_date":"6/9/2012","software_experience_years":18.1},
    {"employee_id":7,"department":"Product","salary":63781.75,"hire_date":"3/25/2015","software_experience_years":5.3},
    {"employee_id":8,"department":"Marketing","salary":146225.67,"hire_date":"3/20/2018","software_experience_years":11.0},
    {"employee_id":9,"department":"Marketing","salary":106094.96,"hire_date":"1/10/2013","software_experience_years":0.5},
    {"employee_id":10,"department":"Engineering","salary":149855.76,"hire_date":"11/3/2021","software_experience_years":0.6},
    {"employee_id":11,"department":"Engineering","salary":98602.71,"hire_date":"2/13/2011","software_experience_years":18.7},
    {"employee_id":12,"department":"Marketing","salary":145754.86,"hire_date":"2/13/2015","software_experience_years":6.3},
    {"employee_id":13,"department":"Sales","salary":129212.09,"hire_date":"5/3/2011","software_experience_years":2.7},
    {"employee_id":14,"department":"Finance","salary":135252.45,"hire_date":"12/21/2013","software_experience_years":4.2},
    {"employee_id":15,"department":"Product","salary":81384.77,"hire_date":"3/20/2021","software_experience_years":11.2},
    {"employee_id":16,"department":"Engineering","salary":61710.03,"hire_date":"4/13/2014","software_experience_years":16.0},
    {"employee_id":17,"department":"Finance","salary":70729.3,"hire_date":"5/25/2016","software_experience_years":1.9},
    {"employee_id":18,"department":"Finance","salary":121598.37,"hire_date":"10/31/2013","software_experience_years":9.5},
    {"employee_id":19,"department":"Engineering","salary":65743.53,"hire_date":"3/6/2017","software_experience_years":1.1},
    {"employee_id":20,"department":"Product","salary":122631.66,"hire_date":"3/18/2021","software_experience_years":9.7},
    {"employee_id":21,"department":"Sales","salary":103630.27,"hire_date":"2/5/2010","software_experience_years":11.3},
    {"employee_id":22,"department":"Finance","salary":76493.56,"hire_date":"12/23/2020","software_experience_years":19.5},
    {"employee_id":23,"department":"Finance","salary":92381.59,"hire_date":"5/1/2016","software_experience_years":3.5},
    {"employee_id":24,"department":"Sales","salary":146497.81,"hire_date":"8/25/2012","software_experience_years":14.1},
    {"employee_id":25,"department":"Marketing","salary":111792.96,"hire_date":"8/9/2017","software_experience_years":20.0},
    {"employee_id":26,"department":"Marketing","salary":62634.67,"hire_date":"11/28/2010","software_experience_years":18.9},
    {"employee_id":27,"department":"Engineering","salary":86785.45,"hire_date":"11/4/2012","software_experience_years":11.6},
    {"employee_id":28,"department":"Finance","salary":136519.22,"hire_date":"10/9/2018","software_experience_years":7.4},
    {"employee_id":29,"department":"Finance","salary":93634.44,"hire_date":"2/20/2014","software_experience_years":9.9},
    {"employee_id":30,"department":"Product","salary":126827.4,"hire_date":"9/13/2016","software_experience_years":19.1},
    {"employee_id":31,"department":"Finance","salary":74555.53,"hire_date":"4/15/2016","software_experience_years":7.3},
    {"employee_id":32,"department":"Engineering","salary":64915.51,"hire_date":"10/14/2011","software_experience_years":19.0},
    {"employee_id":33,"department":"Engineering","salary":54650.99,"hire_date":"2/2/2014","software_experience_years":13.3},
    {"employee_id":34,"department":"Sales","salary":82588.58,"hire_date":"8/13/2011","software_experience_years":8.5},
    {"employee_id":35,"department":"Finance","salary":75140.79,"hire_date":"9/14/2020","software_experience_years":1.0},
    {"employee_id":36,"department":"Finance","salary":94715.52,"hire_date":"12/10/2015","software_experience_years":5.1},
    {"employee_id":37,"department":"Marketing","salary":92230.43,"hire_date":"5/17/2021","software_experience_years":3.1},
    {"employee_id":38,"department":"Marketing","salary":135148.82,"hire_date":"1/25/2017","software_experience_years":14.0},
    {"employee_id":39,"department":"Engineering","salary":131113.04,"hire_date":"3/30/2016","software_experience_years":18.1},
    {"employee_id":40,"department":"Finance","salary":143917.66,"hire_date":"1/27/2019","software_experience_years":7.6},
    {"employee_id":41,"department":"Engineering","salary":64755.72,"hire_date":"5/7/2018","software_experience_years":12.7},
    {"employee_id":42,"department":"Product","salary":64370.18,"hire_date":"8/20/2013","software_experience_years":14.8},
    {"employee_id":43,"department":"Engineering","salary":133407.21,"hire_date":"4/14/2020","software_experience_years":17.9},
    {"employee_id":44,"department":"Finance","salary":74570.45,"hire_date":"5/9/2015","software_experience_years":8.1},
    {"employee_id":45,"department":"Sales","salary":94577.04,"hire_date":"9/20/2011","software_experience_years":11.0},
    {"employee_id":46,"department":"Engineering","salary":141675.09,"hire_date":"10/13/2021","software_experience_years":1.5},
    {"employee_id":47,"department":"Finance","salary":146405.42,"hire_date":"1/30/2010","software_experience_years":10.6},
    {"employee_id":48,"department":"Finance","salary":52871.41,"hire_date":"3/1/2013","software_experience_years":1.5},
    {"employee_id":49,"department":"Marketing","salary":124667.88,"hire_date":"1/16/2021","software_experience_years":2.2},
    {"employee_id":50,"department":"Finance","salary":140289.46,"hire_date":"4/18/2021","software_experience_years":7.5},
    {"employee_id":51,"department":"Sales","salary":53180.35,"hire_date":"1/24/2011","software_experience_years":10.3},
    {"employee_id":52,"department":"Engineering","salary":73720.05,"hire_date":"3/28/2014","software_experience_years":9.7},
    {"employee_id":53,"department":"Product","salary":55050.4,"hire_date":"4/17/2019","software_experience_years":15.1},
    {"employee_id":54,"department":"Product","salary":67906.39,"hire_date":"7/1/2019","software_experience_years":11.6},
    {"employee_id":55,"department":"Engineering","salary":75316.94,"hire_date":"9/8/2015","software_experience_years":13.5},
    {"employee_id":56,"department":"Engineering","salary":111210.99,"hire_date":"9/23/2017","software_experience_years":8.7},
    {"employee_id":57,"department":"Finance","salary":58946.55,"hire_date":"7/17/2016","software_experience_years":16.3},
    {"employee_id":58,"department":"Sales","salary":148571.65,"hire_date":"2/11/2010","software_experience_years":11.4},
    {"employee_id":59,"department":"Engineering","salary":119589.58,"hire_date":"9/17/2021","software_experience_years":6.3},
    {"employee_id":60,"department":"Finance","salary":133318.24,"hire_date":"5/19/2016","software_experience_years":4.3},
    {"employee_id":61,"department":"Product","salary":102549.17,"hire_date":"6/15/2018","software_experience_years":19.6},
    {"employee_id":62,"department":"Sales","salary":121622.98,"hire_date":"2/28/2016","software_experience_years":3.9},
    {"employee_id":63,"department":"Product","salary":135511.15,"hire_date":"1/27/2014","software_experience_years":7.9},
    {"employee_id":64,"department":"Finance","salary":138058.97,"hire_date":"8/27/2019","software_experience_years":9.2},
    {"employee_id":65,"department":"Product","salary":85039.78,"hire_date":"10/30/2017","software_experience_years":18.4},
    {"employee_id":66,"department":"Engineering","salary":122479.43,"hire_date":"7/14/2013","software_experience_years":19.5},
    {"employee_id":67,"department":"Engineering","salary":145463.86,"hire_date":"9/18/2017","software_experience_years":17.1},
    {"employee_id":68,"department":"Marketing","salary":95494.5,"hire_date":"1/26/2017","software_experience_years":15.4},
    {"employee_id":69,"department":"Engineering","salary":120584.07,"hire_date":"3/11/2013","software_experience_years":3.2},
    {"employee_id":70,"department":"Finance","salary":64527.33,"hire_date":"8/30/2017","software_experience_years":2.5},
    {"employee_id":71,"department":"Finance","salary":109046.75,"hire_date":"5/15/2012","software_experience_years":9.9},
    {"employee_id":72,"department":"Product","salary":88627.37,"hire_date":"7/14/2010","software_experience_years":7.3},
    {"employee_id":73,"department":"Product","salary":61504.21,"hire_date":"1/11/2017","software_experience_years":19.4},
    {"employee_id":74,"department":"Finance","salary":114242.44,"hire_date":"5/27/2014","software_experience_years":1.8},
    {"employee_id":75,"department":"Finance","salary":90659.17,"hire_date":"6/23/2010","software_experience_years":4.8},
    {"employee_id":76,"department":"Sales","salary":77559.64,"hire_date":"6/5/2017","software_experience_years":16.9},
    {"employee_id":77,"department":"Marketing","salary":80240.74,"hire_date":"5/15/2021","software_experience_years":3.6},
    {"employee_id":78,"department":"Finance","salary":118979.74,"hire_date":"10/5/2013","software_experience_years":8.4},
    {"employee_id":79,"department":"Engineering","salary":85047.76,"hire_date":"8/7/2016","software_experience_years":18.0},
    {"employee_id":80,"department":"Engineering","salary":51218.73,"hire_date":"10/29/2013","software_experience_years":2.0},
    {"employee_id":81,"department":"Marketing","salary":138986.12,"hire_date":"3/8/2010","software_experience_years":12.6},
    {"employee_id":82,"department":"Sales","salary":149045.6,"hire_date":"4/15/2014","software_experience_years":2.8},
    {"employee_id":83,"department":"Marketing","salary":141477.26,"hire_date":"2/21/2015","software_experience_years":6.5},
    {"employee_id":84,"department":"Engineering","salary":56003.3,"hire_date":"11/20/2016","software_experience_years":17.5},
    {"employee_id":85,"department":"Marketing","salary":128527.02,"hire_date":"11/13/2012","software_experience_years":4.5},
    {"employee_id":86,"department":"Finance","salary":65070.91,"hire_date":"2/2/2012","software_experience_years":13.0},
    {"employee_id":87,"department":"Marketing","salary":120096.84,"hire_date":"8/4/2012","software_experience_years":4.1},
    {"employee_id":88,"department":"Marketing","salary":53126.36,"hire_date":"4/4/2016","software_experience_years":10.5},
    {"employee_id":89,"department":"Product","salary":122594.07,"hire_date":"10/22/2019","software_experience_years":13.4},
    {"employee_id":90,"department":"Marketing","salary":147705.9,"hire_date":"6/27/2014","software_experience_years":16.7},
    {"employee_id":91,"department":"Engineering","salary":81273.65,"hire_date":"9/29/2015","software_experience_years":3.6},
    {"employee_id":92,"department":"Marketing","salary":88769.2,"hire_date":"6/2/2020","software_experience_years":7.7},
    {"employee_id":93,"department":"Engineering","salary":84189.31,"hire_date":"4/13/2021","software_experience_years":2.9},
    {"employee_id":94,"department":"Finance","salary":85628.7,"hire_date":"7/18/2014","software_experience_years":2.1},
    {"employee_id":95,"department":"Product","salary":97548.42,"hire_date":"1/12/2021","software_experience_years":9.5},
    {"employee_id":96,"department":"Engineering","salary":95048.59,"hire_date":"4/29/2012","software_experience_years":0.4},
    {"employee_id":97,"department":"Sales","salary":89495.3,"hire_date":"1/19/2012","software_experience_years":10.7},
    {"employee_id":98,"department":"Engineering","salary":103877.3,"hire_date":"10/9/2011","software_experience_years":10.8},
    {"employee_id":99,"department":"Sales","salary":110196.84,"hire_date":"8/3/2016","software_experience_years":8.3},
    {"employee_id":100,"department":"Finance","salary":109116.02,"hire_date":"8/10/2011","software_experience_years":16.8},
    {"employee_id":101,"department":"Product","salary":52532.83,"hire_date":"9/25/2018","software_experience_years":7.5},
    {"employee_id":102,"department":"Finance","salary":114512.03,"hire_date":"11/13/2017","software_experience_years":18.6},
    {"employee_id":103,"department":"Product","salary":124150.61,"hire_date":"6/7/2017","software_experience_years":0.6},
    {"employee_id":104,"department":"Engineering","salary":106706.75,"hire_date":"5/7/2020","software_experience_years":8.6},
    {"employee_id":105,"department":"Engineering","salary":90520.17,"hire_date":"3/6/2018","software_experience_years":19.0},
    {"employee_id":106,"department":"Engineering","salary":136305.96,"hire_date":"3/19/2020","software_experience_years":8.3},
    {"employee_id":107,"department":"Product","salary":78288.25,"hire_date":"5/21/2011","software_experience_years":4.2},
    {"employee_id":108,"department":"Finance","salary":120227.49,"hire_date":"6/4/2021","software_experience_years":8.5},
    {"employee_id":109,"department":"Finance","salary":54290.96,"hire_date":"10/8/2011","software_experience_years":0.2},
    {"employee_id":110,"department":"Engineering","salary":111741.18,"hire_date":"12/7/2011","software_experience_years":15.7},
    {"employee_id":111,"department":"Finance","salary":75762.29,"hire_date":"6/3/2020","software_experience_years":3.6},
    {"employee_id":112,"department":"Product","salary":68446.31,"hire_date":"1/2/2012","software_experience_years":5.4},
    {"employee_id":113,"department":"Marketing","salary":142643.7,"hire_date":"4/3/2015","software_experience_years":8.6},
    {"employee_id":114,"department":"Sales","salary":55892.22,"hire_date":"8/13/2010","software_experience_years":5.3},
    {"employee_id":115,"department":"Product","salary":62072.95,"hire_date":"2/24/2018","software_experience_years":11.4},
    {"employee_id":116,"department":"Product","salary":119415.93,"hire_date":"3/25/2014","software_experience_years":9.1},
    {"employee_id":117,"department":"Marketing","salary":103951.18,"hire_date":"1/18/2014","software_experience_years":13.4},
    {"employee_id":118,"department":"Product","salary":67545.75,"hire_date":"2/19/2020","software_experience_years":9.2},
    {"employee_id":119,"department":"Engineering","salary":139422.98,"hire_date":"4/3/2021","software_experience_years":19.1},
    {"employee_id":120,"department":"Sales","salary":120524.08,"hire_date":"6/19/2015","software_experience_years":12.5},
    {"employee_id":121,"department":"Product","salary":56628.94,"hire_date":"8/30/2019","software_experience_years":4.3},
    {"employee_id":122,"department":"Finance","salary":61484.15,"hire_date":"9/29/2010","software_experience_years":4.6},
    {"employee_id":123,"department":"Engineering","salary":111148.03,"hire_date":"1/17/2015","software_experience_years":0.4},
    {"employee_id":124,"department":"Finance","salary":84471.13,"hire_date":"5/5/2010","software_experience_years":8.5},
    {"employee_id":125,"department":"Engineering","salary":124765.7,"hire_date":"6/8/2018","software_experience_years":10.8},
    {"employee_id":126,"department":"Marketing","salary":58951.8,"hire_date":"7/6/2018","software_experience_years":3.6},
    {"employee_id":127,"department":"Marketing","salary":78614.86,"hire_date":"12/30/2015","software_experience_years":7.2},
    {"employee_id":128,"department":"Product","salary":112097.02,"hire_date":"2/7/2020","software_experience_years":14.6},
    {"employee_id":129,"department":"Marketing","salary":145094.96,"hire_date":"3/8/2018","software_experience_years":13.8},
    {"employee_id":130,"department":"Product","salary":71845.86,"hire_date":"3/28/2018","software_experience_years":16.0},
    {"employee_id":131,"department":"Engineering","salary":92914.76,"hire_date":"8/15/2017","software_experience_years":19.6},
    {"employee_id":132,"department":"Sales","salary":76177.82,"hire_date":"11/28/2011","software_experience_years":11.4},
    {"employee_id":133,"department":"Sales","salary":90028.84,"hire_date":"12/3/2013","software_experience_years":13.6},
    {"employee_id":134,"department":"Marketing","salary":71014.04,"hire_date":"5/4/2020","software_experience_years":15.1},
    {"employee_id":135,"department":"Marketing","salary":98268.98,"hire_date":"2/21/2017","software_experience_years":14.2},
    {"employee_id":136,"department":"Marketing","salary":65935.32,"hire_date":"1/8/2010","software_experience_years":12.8},
    {"employee_id":137,"department":"Product","salary":139893.6,"hire_date":"3/21/2013","software_experience_years":6.8},
    {"employee_id":138,"department":"Marketing","salary":90430.21,"hire_date":"1/5/2017","software_experience_years":4.4},
    {"employee_id":139,"department":"Sales","salary":137353.72,"hire_date":"5/10/2012","software_experience_years":9.4},
    {"employee_id":140,"department":"Marketing","salary":68624.79,"hire_date":"5/7/2015","software_experience_years":1.5},
    {"employee_id":141,"department":"Engineering","salary":82462.66,"hire_date":"8/28/2011","software_experience_years":3.6},
    {"employee_id":142,"department":"Sales","salary":56394.35,"hire_date":"11/21/2015","software_experience_years":5.6},
    {"employee_id":143,"department":"Marketing","salary":92486.93,"hire_date":"5/12/2012","software_experience_years":7.0},
    {"employee_id":144,"department":"Sales","salary":130184.12,"hire_date":"5/15/2010","software_experience_years":17.6},
    {"employee_id":145,"department":"Engineering","salary":109771.07,"hire_date":"2/22/2019","software_experience_years":0.8},
    {"employee_id":146,"department":"Product","salary":109126.96,"hire_date":"12/24/2021","software_experience_years":19.9},
    {"employee_id":147,"department":"Finance","salary":137272.92,"hire_date":"9/16/2015","software_experience_years":15.7},
    {"employee_id":148,"department":"Engineering","salary":95566.58,"hire_date":"7/11/2012","software_experience_years":16.2},
    {"employee_id":149,"department":"Marketing","salary":127054.98,"hire_date":"3/12/2015","software_experience_years":13.8},
    {"employee_id":150,"department":"Finance","salary":136980.79,"hire_date":"2/23/2017","software_experience_years":18.1},
    {"employee_id":151,"department":"Marketing","salary":119679.6,"hire_date":"10/25/2013","software_experience_years":15.1},
    {"employee_id":152,"department":"Engineering","salary":114994.11,"hire_date":"8/27/2015","software_experience_years":12.8},
    {"employee_id":153,"department":"Engineering","salary":56361.37,"hire_date":"6/14/2011","software_experience_years":19.2},
    {"employee_id":154,"department":"Engineering","salary":113046.13,"hire_date":"4/18/2021","software_experience_years":7.1},
    {"employee_id":155,"department":"Product","salary":138281.39,"hire_date":"12/27/2013","software_experience_years":11.5},
    {"employee_id":156,"department":"Sales","salary":123171.72,"hire_date":"8/1/2019","software_experience_years":6.9},
    {"employee_id":157,"department":"Engineering","salary":56855.88,"hire_date":"10/2/2014","software_experience_years":14.1},
    {"employee_id":158,"department":"Product","salary":51203.62,"hire_date":"7/21/2017","software_experience_years":12.2},
    {"employee_id":159,"department":"Product","salary":77734.72,"hire_date":"8/12/2012","software_experience_years":8.9},
    {"employee_id":160,"department":"Sales","salary":134997.98,"hire_date":"6/2/2019","software_experience_years":14.7},
    {"employee_id":161,"department":"Product","salary":141340.3,"hire_date":"2/5/2017","software_experience_years":2.9},
    {"employee_id":162,"department":"Product","salary":84985.89,"hire_date":"4/4/2018","software_experience_years":11.1},
    {"employee_id":163,"department":"Sales","salary":101532.23,"hire_date":"6/13/2019","software_experience_years":10.7},
    {"employee_id":164,"department":"Sales","salary":93097.9,"hire_date":"4/29/2017","software_experience_years":2.6},
    {"employee_id":165,"department":"Finance","salary":55705.61,"hire_date":"11/9/2013","software_experience_years":13.7},
    {"employee_id":166,"department":"Sales","salary":133317.46,"hire_date":"10/1/2018","software_experience_years":8.6},
    {"employee_id":167,"department":"Finance","salary":107993.69,"hire_date":"11/21/2010","software_experience_years":7.4},
    {"employee_id":168,"department":"Sales","salary":105093.22,"hire_date":"2/12/2017","software_experience_years":7.8},
    {"employee_id":169,"department":"Product","salary":65982.86,"hire_date":"6/13/2013","software_experience_years":5.5},
    {"employee_id":170,"department":"Sales","salary":129986.26,"hire_date":"9/21/2014","software_experience_years":6.9},
    {"employee_id":171,"department":"Product","salary":134124.81,"hire_date":"6/1/2016","software_experience_years":19.0},
    {"employee_id":172,"department":"Product","salary":95767.45,"hire_date":"3/24/2012","software_experience_years":19.7},
    {"employee_id":173,"department":"Marketing","salary":124110.82,"hire_date":"11/29/2015","software_experience_years":5.9},
    {"employee_id":174,"department":"Finance","salary":149040.78,"hire_date":"11/8/2020","software_experience_years":9.1},
    {"employee_id":175,"department":"Engineering","salary":121718.03,"hire_date":"6/25/2011","software_experience_years":4.1},
    {"employee_id":176,"department":"Marketing","salary":109325.86,"hire_date":"7/31/2012","software_experience_years":18.4},
    {"employee_id":177,"department":"Marketing","salary":80090.77,"hire_date":"9/30/2012","software_experience_years":8.5},
    {"employee_id":178,"department":"Sales","salary":52626.61,"hire_date":"1/5/2019","software_experience_years":0.6},
    {"employee_id":179,"department":"Engineering","salary":130285.79,"hire_date":"1/30/2013","software_experience_years":19.9},
    {"employee_id":180,"department":"Engineering","salary":95843.89,"hire_date":"1/15/2021","software_experience_years":6.1},
    {"employee_id":181,"department":"Marketing","salary":119371.69,"hire_date":"9/8/2019","software_experience_years":1.9},
    {"employee_id":182,"department":"Product","salary":94680.27,"hire_date":"5/15/2019","software_experience_years":14.2},
    {"employee_id":183,"department":"Finance","salary":70374.75,"hire_date":"11/23/2012","software_experience_years":17.1},
    {"employee_id":184,"department":"Marketing","salary":75279.06,"hire_date":"12/31/2018","software_experience_years":5.2},
    {"employee_id":185,"department":"Finance","salary":142706.53,"hire_date":"12/15/2019","software_experience_years":11.9},
    {"employee_id":186,"department":"Finance","salary":69047.16,"hire_date":"10/28/2016","software_experience_years":6.7},
    {"employee_id":187,"department":"Sales","salary":56512.77,"hire_date":"9/13/2010","software_experience_years":2.7},
    {"employee_id":188,"department":"Sales","salary":96449.54,"hire_date":"9/8/2012","software_experience_years":3.6},
    {"employee_id":189,"department":"Product","salary":85761.18,"hire_date":"3/23/2021","software_experience_years":3.2},
    {"employee_id":190,"department":"Engineering","salary":94067.45,"hire_date":"5/5/2012","software_experience_years":9.0},
    {"employee_id":191,"department":"Product","salary":122895.98,"hire_date":"1/30/2018","software_experience_years":18.4},
    {"employee_id":192,"department":"Finance","salary":94590.9,"hire_date":"7/28/2010","software_experience_years":3.3},
    {"employee_id":193,"department":"Sales","salary":68442.77,"hire_date":"8/4/2010","software_experience_years":11.7},
    {"employee_id":194,"department":"Finance","salary":121441.75,"hire_date":"5/24/2014","software_experience_years":7.3},
    {"employee_id":195,"department":"Sales","salary":69531.23,"hire_date":"8/21/2017","software_experience_years":16.1},
    {"employee_id":196,"department":"Sales","salary":107567.54,"hire_date":"1/2/2015","software_experience_years":16.7},
    {"employee_id":197,"department":"Engineering","salary":148789.9,"hire_date":"8/27/2016","software_experience_years":20.0},
    {"employee_id":198,"department":"Sales","salary":89702.33,"hire_date":"9/1/2013","software_experience_years":19.7},
    {"employee_id":199,"department":"Engineering","salary":75984.28,"hire_date":"7/14/2014","software_experience_years":14.0},
    {"employee_id":200,"department":"Sales","salary":50545.51,"hire_date":"2/29/2012","software_experience_years":0.3},
    {"employee_id":201,"department":"Sales","salary":92912.36,"hire_date":"2/9/2015","software_experience_years":9.4},
    {"employee_id":202,"department":"Product","salary":87978.53,"hire_date":"5/25/2010","software_experience_years":18.0},
    {"employee_id":203,"department":"Product","salary":126252.93,"hire_date":"7/30/2015","software_experience_years":3.1},
    {"employee_id":204,"department":"Finance","salary":104282.18,"hire_date":"11/8/2013","software_experience_years":11.8},
    {"employee_id":205,"department":"Marketing","salary":85262.83,"hire_date":"8/26/2018","software_experience_years":15.4},
    {"employee_id":206,"department":"Product","salary":126824.26,"hire_date":"7/12/2010","software_experience_years":7.1},
    {"employee_id":207,"department":"Finance","salary":79935.88,"hire_date":"8/24/2017","software_experience_years":3.0},
    {"employee_id":208,"department":"Finance","salary":63983.02,"hire_date":"4/15/2014","software_experience_years":9.1},
    {"employee_id":209,"department":"Finance","salary":125043.18,"hire_date":"7/1/2011","software_experience_years":14.3},
    {"employee_id":210,"department":"Sales","salary":79984.41,"hire_date":"6/22/2016","software_experience_years":8.9},
    {"employee_id":211,"department":"Engineering","salary":79216.18,"hire_date":"3/24/2020","software_experience_years":19.3},
    {"employee_id":212,"department":"Finance","salary":51963.85,"hire_date":"6/22/2018","software_experience_years":5.6},
    {"employee_id":213,"department":"Marketing","salary":109007.65,"hire_date":"2/17/2019","software_experience_years":2.8},
    {"employee_id":214,"department":"Sales","salary":142289.06,"hire_date":"2/13/2015","software_experience_years":13.5},
    {"employee_id":215,"department":"Sales","salary":70382.88,"hire_date":"5/30/2013","software_experience_years":19.1},
    {"employee_id":216,"department":"Finance","salary":75094.51,"hire_date":"11/14/2012","software_experience_years":10.9},
    {"employee_id":217,"department":"Product","salary":128697.76,"hire_date":"3/4/2020","software_experience_years":16.3},
    {"employee_id":218,"department":"Engineering","salary":85691.43,"hire_date":"5/29/2020","software_experience_years":15.3},
    {"employee_id":219,"department":"Marketing","salary":115991.38,"hire_date":"10/30/2017","software_experience_years":3.5},
    {"employee_id":220,"department":"Engineering","salary":134922.27,"hire_date":"2/3/2021","software_experience_years":11.5},
    {"employee_id":221,"department":"Engineering","salary":93667.41,"hire_date":"8/22/2013","software_experience_years":3.7},
    {"employee_id":222,"department":"Engineering","salary":116439.12,"hire_date":"7/14/2014","software_experience_years":14.2},
    {"employee_id":223,"department":"Finance","salary":83768.32,"hire_date":"7/12/2020","software_experience_years":7.5},
    {"employee_id":224,"department":"Marketing","salary":90185.8,"hire_date":"10/12/2012","software_experience_years":17.9},
    {"employee_id":225,"department":"Engineering","salary":71010.15,"hire_date":"5/2/2012","software_experience_years":18.0},
    {"employee_id":226,"department":"Engineering","salary":119868.83,"hire_date":"7/29/2021","software_experience_years":3.7},
    {"employee_id":227,"department":"Product","salary":55420.37,"hire_date":"5/25/2013","software_experience_years":2.4},
    {"employee_id":228,"department":"Engineering","salary":87706.66,"hire_date":"8/26/2014","software_experience_years":12.1},
    {"employee_id":229,"department":"Marketing","salary":94710.06,"hire_date":"5/23/2014","software_experience_years":19.0},
    {"employee_id":230,"department":"Finance","salary":102503.85,"hire_date":"10/1/2016","software_experience_years":16.2},
    {"employee_id":231,"department":"Sales","salary":67047.31,"hire_date":"10/28/2013","software_experience_years":9.1},
    {"employee_id":232,"department":"Marketing","salary":96707.75,"hire_date":"1/28/2020","software_experience_years":16.7},
    {"employee_id":233,"department":"Sales","salary":127649.05,"hire_date":"10/21/2016","software_experience_years":9.6},
    {"employee_id":234,"department":"Sales","salary":111456.25,"hire_date":"4/11/2017","software_experience_years":9.1},
    {"employee_id":235,"department":"Sales","salary":112392.85,"hire_date":"8/2/2020","software_experience_years":0.3},
    {"employee_id":236,"department":"Engineering","salary":80724.49,"hire_date":"7/24/2020","software_experience_years":6.3},
    {"employee_id":237,"department":"Product","salary":55493.68,"hire_date":"5/20/2012","software_experience_years":2.2},
    {"employee_id":238,"department":"Finance","salary":134711.09,"hire_date":"2/5/2011","software_experience_years":11.8},
    {"employee_id":239,"department":"Sales","salary":71929.18,"hire_date":"5/27/2012","software_experience_years":14.5},
    {"employee_id":240,"department":"Sales","salary":85349.53,"hire_date":"9/23/2015","software_experience_years":9.5},
    {"employee_id":241,"department":"Sales","salary":98379.1,"hire_date":"3/6/2013","software_experience_years":9.1},
    {"employee_id":242,"department":"Product","salary":145347.92,"hire_date":"7/3/2018","software_experience_years":8.1},
    {"employee_id":243,"department":"Finance","salary":52119.32,"hire_date":"10/28/2017","software_experience_years":1.5},
    {"employee_id":244,"department":"Finance","salary":120309.02,"hire_date":"9/11/2020","software_experience_years":3.2},
    {"employee_id":245,"department":"Engineering","salary":84743.65,"hire_date":"10/27/2012","software_experience_years":13.2},
    {"employee_id":246,"department":"Sales","salary":90820.65,"hire_date":"1/26/2014","software_experience_years":4.9},
    {"employee_id":247,"department":"Engineering","salary":133607.17,"hire_date":"1/13/2021","software_experience_years":12.1},
    {"employee_id":248,"department":"Product","salary":54112.36,"hire_date":"11/30/2012","software_experience_years":18.2},
    {"employee_id":249,"department":"Product","salary":116457.25,"hire_date":"1/10/2012","software_experience_years":17.7},
    {"employee_id":250,"department":"Sales","salary":77847.08,"hire_date":"12/18/2011","software_experience_years":7.7},
    {"employee_id":251,"department":"Marketing","salary":113887.79,"hire_date":"11/25/2011","software_experience_years":8.1},
    {"employee_id":252,"department":"Marketing","salary":104920.66,"hire_date":"2/26/2010","software_experience_years":7.8},
    {"employee_id":253,"department":"Marketing","salary":116823.06,"hire_date":"7/4/2018","software_experience_years":13.3},
    {"employee_id":254,"department":"Finance","salary":124032.42,"hire_date":"8/4/2018","software_experience_years":5.3},
    {"employee_id":255,"department":"Finance","salary":57867.88,"hire_date":"1/14/2021","software_experience_years":6.2},
    {"employee_id":256,"department":"Finance","salary":126776.69,"hire_date":"12/7/2010","software_experience_years":8.7},
    {"employee_id":257,"department":"Marketing","salary":80719.06,"hire_date":"9/18/2013","software_experience_years":12.0},
    {"employee_id":258,"department":"Finance","salary":110175.2,"hire_date":"9/21/2013","software_experience_years":14.0},
    {"employee_id":259,"department":"Product","salary":91067.9,"hire_date":"6/8/2015","software_experience_years":19.0},
    {"employee_id":260,"department":"Sales","salary":132374.14,"hire_date":"8/11/2011","software_experience_years":15.9},
    {"employee_id":261,"department":"Marketing","salary":118537.99,"hire_date":"9/24/2016","software_experience_years":16.6},
    {"employee_id":262,"department":"Marketing","salary":98098.77,"hire_date":"2/22/2019","software_experience_years":8.3},
    {"employee_id":263,"department":"Marketing","salary":106558.49,"hire_date":"2/3/2021","software_experience_years":4.8},
    {"employee_id":264,"department":"Marketing","salary":91543.9,"hire_date":"11/19/2014","software_experience_years":3.8},
    {"employee_id":265,"department":"Product","salary":88342.37,"hire_date":"3/20/2014","software_experience_years":5.6},
    {"employee_id":266,"department":"Marketing","salary":50753.67,"hire_date":"1/23/2013","software_experience_years":1.7},
    {"employee_id":267,"department":"Product","salary":70576.75,"hire_date":"3/18/2012","software_experience_years":16.0},
    {"employee_id":268,"department":"Finance","salary":139759.55,"hire_date":"7/10/2012","software_experience_years":16.1},
    {"employee_id":269,"department":"Finance","salary":78237.13,"hire_date":"11/4/2010","software_experience_years":8.7},
    {"employee_id":270,"department":"Product","salary":131326.22,"hire_date":"3/29/2014","software_experience_years":7.5},
    {"employee_id":271,"department":"Marketing","salary":106192.36,"hire_date":"8/23/2014","software_experience_years":8.0},
    {"employee_id":272,"department":"Finance","salary":103027.38,"hire_date":"6/27/2017","software_experience_years":8.7},
    {"employee_id":273,"department":"Marketing","salary":74771.74,"hire_date":"2/27/2017","software_experience_years":0.4},
    {"employee_id":274,"department":"Product","salary":94102.55,"hire_date":"5/20/2016","software_experience_years":18.8},
    {"employee_id":275,"department":"Engineering","salary":105930.77,"hire_date":"10/21/2010","software_experience_years":7.1},
    {"employee_id":276,"department":"Sales","salary":95862.22,"hire_date":"5/3/2010","software_experience_years":19.6},
    {"employee_id":277,"department":"Finance","salary":130436.52,"hire_date":"10/7/2010","software_experience_years":19.2},
    {"employee_id":278,"department":"Finance","salary":67166.55,"hire_date":"5/17/2020","software_experience_years":16.6},
    {"employee_id":279,"department":"Marketing","salary":128105.54,"hire_date":"1/20/2013","software_experience_years":2.9},
    {"employee_id":280,"department":"Finance","salary":123888.25,"hire_date":"5/28/2014","software_experience_years":8.7},
    {"employee_id":281,"department":"Sales","salary":114566.37,"hire_date":"12/13/2010","software_experience_years":0.1},
    {"employee_id":282,"department":"Marketing","salary":91996.85,"hire_date":"12/7/2011","software_experience_years":9.7},
    {"employee_id":283,"department":"Sales","salary":103850.23,"hire_date":"6/9/2010","software_experience_years":17.2},
    {"employee_id":284,"department":"Engineering","salary":95494.53,"hire_date":"2/26/2014","software_experience_years":8.4},
    {"employee_id":285,"department":"Finance","salary":132070.98,"hire_date":"8/12/2021","software_experience_years":12.4},
    {"employee_id":286,"department":"Engineering","salary":147310.41,"hire_date":"1/21/2015","software_experience_years":9.8},
    {"employee_id":287,"department":"Marketing","salary":86865.9,"hire_date":"4/28/2021","software_experience_years":12.7},
    {"employee_id":288,"department":"Finance","salary":133412.82,"hire_date":"12/21/2015","software_experience_years":2.0},
    {"employee_id":289,"department":"Finance","salary":118605.99,"hire_date":"2/7/2021","software_experience_years":2.9},
    {"employee_id":290,"department":"Engineering","salary":60107.45,"hire_date":"11/15/2013","software_experience_years":1.9},
    {"employee_id":291,"department":"Engineering","salary":91966.01,"hire_date":"4/15/2017","software_experience_years":14.4},
    {"employee_id":292,"department":"Marketing","salary":50120.84,"hire_date":"1/3/2014","software_experience_years":8.8},
    {"employee_id":293,"department":"Product","salary":101238.81,"hire_date":"5/23/2019","software_experience_years":12.4},
    {"employee_id":294,"department":"Product","salary":130362.2,"hire_date":"10/17/2013","software_experience_years":16.9},
    {"employee_id":295,"department":"Engineering","salary":119873.3,"hire_date":"2/14/2010","software_experience_years":7.3},
    {"employee_id":296,"department":"Finance","salary":103669.34,"hire_date":"3/11/2016","software_experience_years":11.9},
    {"employee_id":297,"department":"Product","salary":126501.11,"hire_date":"11/20/2020","software_experience_years":14.5},
    {"employee_id":298,"department":"Marketing","salary":129151.39,"hire_date":"11/29/2017","software_experience_years":16.2},
    {"employee_id":299,"department":"Marketing","salary":51201.01,"hire_date":"1/12/2017","software_experience_years":7.2},
    {"employee_id":300,"department":"Marketing","salary":144812.73,"hire_date":"9/21/2013","software_experience_years":1.9},
    {"employee_id":301,"department":"Engineering","salary":57075.09,"hire_date":"3/11/2019","software_experience_years":14.9},
    {"employee_id":302,"department":"Sales","salary":54526.11,"hire_date":"9/3/2017","software_experience_years":4.4},
    {"employee_id":303,"department":"Engineering","salary":121409.21,"hire_date":"9/16/2013","software_experience_years":7.9},
    {"employee_id":304,"department":"Marketing","salary":101341.85,"hire_date":"5/12/2016","software_experience_years":16.4},
    {"employee_id":305,"department":"Product","salary":57338.49,"hire_date":"12/17/2020","software_experience_years":5.4},
    {"employee_id":306,"department":"Product","salary":53950.8,"hire_date":"12/5/2010","software_experience_years":3.9},
    {"employee_id":307,"department":"Engineering","salary":108425.32,"hire_date":"8/17/2016","software_experience_years":1.6},
    {"employee_id":308,"department":"Engineering","salary":85388.75,"hire_date":"10/17/2015","software_experience_years":12.7},
    {"employee_id":309,"department":"Product","salary":90249.71,"hire_date":"9/24/2018","software_experience_years":18.7},
    {"employee_id":310,"department":"Finance","salary":67007.7,"hire_date":"10/26/2012","software_experience_years":10.9},
    {"employee_id":311,"department":"Marketing","salary":121536.17,"hire_date":"4/28/2013","software_experience_years":3.6},
    {"employee_id":312,"department":"Finance","salary":95913.8,"hire_date":"7/30/2017","software_experience_years":4.2},
    {"employee_id":313,"department":"Engineering","salary":100794.09,"hire_date":"9/30/2017","software_experience_years":19.0},
    {"employee_id":314,"department":"Product","salary":130452.67,"hire_date":"12/7/2016","software_experience_years":15.0},
    {"employee_id":315,"department":"Engineering","salary":113822.69,"hire_date":"10/27/2017","software_experience_years":5.3},
    {"employee_id":316,"department":"Finance","salary":146112.8,"hire_date":"11/24/2010","software_experience_years":19.3},
    {"employee_id":317,"department":"Product","salary":120647.34,"hire_date":"4/16/2012","software_experience_years":10.3},
    {"employee_id":318,"department":"Sales","salary":143463.12,"hire_date":"7/1/2018","software_experience_years":13.5},
    {"employee_id":319,"department":"Finance","salary":120736.68,"hire_date":"3/22/2014","software_experience_years":16.9},
    {"employee_id":320,"department":"Sales","salary":97266.41,"hire_date":"9/7/2012","software_experience_years":10.9},
    {"employee_id":321,"department":"Engineering","salary":121196.06,"hire_date":"2/6/2017","software_experience_years":7.7},
    {"employee_id":322,"department":"Product","salary":82079.92,"hire_date":"2/23/2014","software_experience_years":14.9},
    {"employee_id":323,"department":"Finance","salary":74841.15,"hire_date":"11/15/2012","software_experience_years":4.5},
    {"employee_id":324,"department":"Finance","salary":61826.97,"hire_date":"3/14/2014","software_experience_years":19.7},
    {"employee_id":325,"department":"Sales","salary":57782.21,"hire_date":"3/23/2019","software_experience_years":5.1},
    {"employee_id":326,"department":"Engineering","salary":135315.88,"hire_date":"4/29/2012","software_experience_years":6.6},
    {"employee_id":327,"department":"Marketing","salary":83775.88,"hire_date":"7/31/2012","software_experience_years":2.6},
    {"employee_id":328,"department":"Sales","salary":139958.81,"hire_date":"11/9/2011","software_experience_years":14.6},
    {"employee_id":329,"department":"Engineering","salary":143725.37,"hire_date":"1/2/2013","software_experience_years":10.1},
    {"employee_id":330,"department":"Engineering","salary":71271.32,"hire_date":"10/24/2019","software_experience_years":13.1},
    {"employee_id":331,"department":"Marketing","salary":140244.53,"hire_date":"11/15/2016","software_experience_years":18.7},
    {"employee_id":332,"department":"Engineering","salary":62702.98,"hire_date":"12/25/2020","software_experience_years":7.9},
    {"employee_id":333,"department":"Finance","salary":78695.05,"hire_date":"10/29/2014","software_experience_years":7.7},
    {"employee_id":334,"department":"Engineering","salary":69849.64,"hire_date":"9/23/2013","software_experience_years":15.5},
    {"employee_id":335,"department":"Product","salary":73345.86,"hire_date":"7/5/2011","software_experience_years":9.3},
    {"employee_id":336,"department":"Engineering","salary":76179.42,"hire_date":"11/22/2013","software_experience_years":18.8},
    {"employee_id":337,"department":"Engineering","salary":62463.11,"hire_date":"5/25/2011","software_experience_years":10.6},
    {"employee_id":338,"department":"Engineering","salary":79848.65,"hire_date":"4/26/2020","software_experience_years":0.9},
    {"employee_id":339,"department":"Marketing","salary":141157.18,"hire_date":"9/4/2014","software_experience_years":5.0},
    {"employee_id":340,"department":"Product","salary":87129.87,"hire_date":"3/24/2012","software_experience_years":8.6},
    {"employee_id":341,"department":"Engineering","salary":135368.96,"hire_date":"9/27/2010","software_experience_years":5.7},
    {"employee_id":342,"department":"Product","salary":52494.84,"hire_date":"5/2/2013","software_experience_years":7.3},
    {"employee_id":343,"department":"Product","salary":144241.95,"hire_date":"8/7/2016","software_experience_years":1.3},
    {"employee_id":344,"department":"Finance","salary":81469.89,"hire_date":"8/5/2019","software_experience_years":3.9},
    {"employee_id":345,"department":"Engineering","salary":70787.24,"hire_date":"2/5/2012","software_experience_years":9.8},
    {"employee_id":346,"department":"Sales","salary":99751.11,"hire_date":"4/23/2017","software_experience_years":9.6},
    {"employee_id":347,"department":"Product","salary":96944.12,"hire_date":"2/10/2017","software_experience_years":5.4},
    {"employee_id":348,"department":"Finance","salary":56398.01,"hire_date":"7/26/2019","software_experience_years":0.2},
    {"employee_id":349,"department":"Sales","salary":138435.94,"hire_date":"10/15/2010","software_experience_years":5.1},
    {"employee_id":350,"department":"Engineering","salary":66546.01,"hire_date":"6/30/2021","software_experience_years":3.7},
    {"employee_id":351,"department":"Product","salary":146220.51,"hire_date":"1/17/2021","software_experience_years":8.1},
    {"employee_id":352,"department":"Sales","salary":87906.35,"hire_date":"12/20/2019","software_experience_years":11.2},
    {"employee_id":353,"department":"Product","salary":66601.75,"hire_date":"7/12/2020","software_experience_years":2.7},
    {"employee_id":354,"department":"Sales","salary":141976.86,"hire_date":"1/25/2018","software_experience_years":9.0},
    {"employee_id":355,"department":"Marketing","salary":96410.7,"hire_date":"11/12/2013","software_experience_years":19.0},
    {"employee_id":356,"department":"Engineering","salary":58760.87,"hire_date":"5/11/2011","software_experience_years":13.7},
    {"employee_id":357,"department":"Finance","salary":118166.97,"hire_date":"12/1/2019","software_experience_years":0.8},
    {"employee_id":358,"department":"Product","salary":77620.6,"hire_date":"12/26/2021","software_experience_years":12.1},
    {"employee_id":359,"department":"Product","salary":149903.29,"hire_date":"7/13/2012","software_experience_years":14.8},
    {"employee_id":360,"department":"Product","salary":97909.22,"hire_date":"1/4/2013","software_experience_years":12.5},
    {"employee_id":361,"department":"Sales","salary":105639.6,"hire_date":"8/21/2018","software_experience_years":17.2},
    {"employee_id":362,"department":"Product","salary":122248.81,"hire_date":"3/24/2014","software_experience_years":9.6},
    {"employee_id":363,"department":"Finance","salary":113807.77,"hire_date":"11/30/2020","software_experience_years":17.2},
    {"employee_id":364,"department":"Product","salary":143746.66,"hire_date":"2/21/2020","software_experience_years":13.6},
    {"employee_id":365,"department":"Engineering","salary":130363.1,"hire_date":"7/3/2016","software_experience_years":14.0},
    {"employee_id":366,"department":"Marketing","salary":67844.21,"hire_date":"11/5/2010","software_experience_years":1.2},
    {"employee_id":367,"department":"Marketing","salary":114225.81,"hire_date":"9/2/2017","software_experience_years":0.7},
    {"employee_id":368,"department":"Marketing","salary":138874.32,"hire_date":"12/18/2011","software_experience_years":1.7},
    {"employee_id":369,"department":"Product","salary":85153.7,"hire_date":"7/26/2010","software_experience_years":0.3},
    {"employee_id":370,"department":"Product","salary":108868.49,"hire_date":"3/9/2018","software_experience_years":15.9},
    {"employee_id":371,"department":"Marketing","salary":124091.84,"hire_date":"2/23/2010","software_experience_years":14.2},
    {"employee_id":372,"department":"Marketing","salary":104366.28,"hire_date":"11/12/2013","software_experience_years":19.6},
    {"employee_id":373,"department":"Sales","salary":121880.24,"hire_date":"11/26/2014","software_experience_years":18.5},
    {"employee_id":374,"department":"Marketing","salary":127102.18,"hire_date":"4/8/2014","software_experience_years":9.2},
    {"employee_id":375,"department":"Marketing","salary":119040.01,"hire_date":"12/18/2017","software_experience_years":1.0},
    {"employee_id":376,"department":"Product","salary":128536.82,"hire_date":"6/12/2016","software_experience_years":3.8},
    {"employee_id":377,"department":"Engineering","salary":53034.56,"hire_date":"2/3/2018","software_experience_years":14.1},
    {"employee_id":378,"department":"Engineering","salary":56826.31,"hire_date":"10/30/2016","software_experience_years":11.4},
    {"employee_id":379,"department":"Engineering","salary":90158.74,"hire_date":"5/15/2013","software_experience_years":1.8},
    {"employee_id":380,"department":"Finance","salary":94435.51,"hire_date":"4/21/2018","software_experience_years":11.8},
    {"employee_id":381,"department":"Marketing","salary":133453.31,"hire_date":"4/7/2010","software_experience_years":19.7},
    {"employee_id":382,"department":"Product","salary":134683.09,"hire_date":"11/2/2017","software_experience_years":12.3},
    {"employee_id":383,"department":"Sales","salary":131129.41,"hire_date":"9/24/2020","software_experience_years":6.0},
    {"employee_id":384,"department":"Finance","salary":127569.48,"hire_date":"7/23/2017","software_experience_years":19.9},
    {"employee_id":385,"department":"Sales","salary":135728.96,"hire_date":"12/23/2012","software_experience_years":8.1},
    {"employee_id":386,"department":"Finance","salary":121413.73,"hire_date":"7/2/2014","software_experience_years":17.8},
    {"employee_id":387,"department":"Engineering","salary":148489.62,"hire_date":"8/29/2012","software_experience_years":10.1},
    {"employee_id":388,"department":"Sales","salary":110807.3,"hire_date":"6/4/2018","software_experience_years":7.7},
    {"employee_id":389,"department":"Marketing","salary":52827.01,"hire_date":"2/8/2011","software_experience_years":18.7},
    {"employee_id":390,"department":"Product","salary":51474.27,"hire_date":"10/13/2016","software_experience_years":9.6},
    {"employee_id":391,"department":"Marketing","salary":105225.68,"hire_date":"7/29/2015","software_experience_years":18.9},
    {"employee_id":392,"department":"Product","salary":125938.51,"hire_date":"4/15/2018","software_experience_years":14.5},
    {"employee_id":393,"department":"Engineering","salary":108940.41,"hire_date":"8/30/2021","software_experience_years":15.1},
    {"employee_id":394,"department":"Product","salary":80103.89,"hire_date":"7/1/2010","software_experience_years":7.5},
    {"employee_id":395,"department":"Finance","salary":60182.8,"hire_date":"5/12/2020","software_experience_years":11.9},
    {"employee_id":396,"department":"Finance","salary":90319.55,"hire_date":"12/29/2021","software_experience_years":16.2},
    {"employee_id":397,"department":"Finance","salary":123247.37,"hire_date":"7/12/2015","software_experience_years":16.0},
    {"employee_id":398,"department":"Product","salary":134939.93,"hire_date":"10/17/2014","software_experience_years":15.9},
    {"employee_id":399,"department":"Product","salary":130193.08,"hire_date":"5/21/2016","software_experience_years":10.5},
    {"employee_id":400,"department":"Sales","salary":124090.96,"hire_date":"6/14/2010","software_experience_years":1.5},
    {"employee_id":401,"department":"Marketing","salary":121540.6,"hire_date":"11/11/2012","software_experience_years":16.0},
    {"employee_id":402,"department":"Sales","salary":111937.07,"hire_date":"1/1/2016","software_experience_years":14.0},
    {"employee_id":403,"department":"Finance","salary":59914.83,"hire_date":"10/10/2010","software_experience_years":18.3},
    {"employee_id":404,"department":"Product","salary":118578.13,"hire_date":"3/24/2012","software_experience_years":7.7},
    {"employee_id":405,"department":"Marketing","salary":130279.52,"hire_date":"6/3/2018","software_experience_years":5.2},
    {"employee_id":406,"department":"Finance","salary":135874.28,"hire_date":"11/23/2017","software_experience_years":4.9},
    {"employee_id":407,"department":"Marketing","salary":145641.82,"hire_date":"4/27/2010","software_experience_years":4.6},
    {"employee_id":408,"department":"Marketing","salary":55007.73,"hire_date":"2/18/2021","software_experience_years":8.1},
    {"employee_id":409,"department":"Engineering","salary":58485.71,"hire_date":"11/6/2019","software_experience_years":1.8},
    {"employee_id":410,"department":"Marketing","salary":142216.12,"hire_date":"9/12/2012","software_experience_years":17.9},
    {"employee_id":411,"department":"Marketing","salary":64721.48,"hire_date":"6/12/2021","software_experience_years":5.0},
    {"employee_id":412,"department":"Sales","salary":92075.98,"hire_date":"12/26/2010","software_experience_years":18.8},
    {"employee_id":413,"department":"Marketing","salary":133575.33,"hire_date":"10/17/2015","software_experience_years":7.5},
    {"employee_id":414,"department":"Marketing","salary":119397.24,"hire_date":"2/15/2021","software_experience_years":18.7},
    {"employee_id":415,"department":"Engineering","salary":58665.77,"hire_date":"5/24/2020","software_experience_years":18.4},
    {"employee_id":416,"department":"Engineering","salary":77838.01,"hire_date":"11/20/2015","software_experience_years":1.7},
    {"employee_id":417,"department":"Product","salary":137899.53,"hire_date":"12/8/2019","software_experience_years":4.7},
    {"employee_id":418,"department":"Marketing","salary":148316.09,"hire_date":"6/1/2013","software_experience_years":10.9},
    {"employee_id":419,"department":"Finance","salary":51846.26,"hire_date":"8/22/2021","software_experience_years":7.3},
    {"employee_id":420,"department":"Sales","salary":92234.78,"hire_date":"3/4/2021","software_experience_years":8.0},
    {"employee_id":421,"department":"Finance","salary":52626.83,"hire_date":"3/1/2011","software_experience_years":15.8},
    {"employee_id":422,"department":"Marketing","salary":90304.2,"hire_date":"10/14/2013","software_experience_years":0.2},
    {"employee_id":423,"department":"Marketing","salary":82337.41,"hire_date":"8/21/2019","software_experience_years":14.6},
    {"employee_id":424,"department":"Finance","salary":61373.76,"hire_date":"4/19/2011","software_experience_years":7.1},
    {"employee_id":425,"department":"Marketing","salary":122986.68,"hire_date":"4/8/2016","software_experience_years":14.9},
    {"employee_id":426,"department":"Finance","salary":125140.17,"hire_date":"7/25/2015","software_experience_years":9.9},
    {"employee_id":427,"department":"Marketing","salary":85675.62,"hire_date":"10/19/2015","software_experience_years":13.1},
    {"employee_id":428,"department":"Finance","salary":148161.8,"hire_date":"11/11/2020","software_experience_years":10.5},
    {"employee_id":429,"department":"Engineering","salary":125970.35,"hire_date":"7/31/2014","software_experience_years":19.9},
    {"employee_id":430,"department":"Marketing","salary":90579.6,"hire_date":"4/29/2020","software_experience_years":8.6},
    {"employee_id":431,"department":"Product","salary":108444.71,"hire_date":"8/22/2016","software_experience_years":19.4},
    {"employee_id":432,"department":"Finance","salary":123116.52,"hire_date":"11/1/2021","software_experience_years":13.7},
    {"employee_id":433,"department":"Marketing","salary":121421.08,"hire_date":"2/20/2011","software_experience_years":0.6},
    {"employee_id":434,"department":"Engineering","salary":60859.33,"hire_date":"12/18/2013","software_experience_years":10.9},
    {"employee_id":435,"department":"Finance","salary":132683.29,"hire_date":"9/30/2020","software_experience_years":2.8},
    {"employee_id":436,"department":"Marketing","salary":110988.34,"hire_date":"2/16/2011","software_experience_years":5.4},
    {"employee_id":437,"department":"Engineering","salary":123361.42,"hire_date":"8/16/2010","software_experience_years":3.9},
    {"employee_id":438,"department":"Product","salary":110213.31,"hire_date":"12/5/2016","software_experience_years":17.6},
    {"employee_id":439,"department":"Product","salary":111572.6,"hire_date":"9/8/2014","software_experience_years":6.3},
    {"employee_id":440,"department":"Finance","salary":79153.38,"hire_date":"7/12/2013","software_experience_years":4.2},
    {"employee_id":441,"department":"Sales","salary":64239.19,"hire_date":"5/9/2015","software_experience_years":19.2},
    {"employee_id":442,"department":"Finance","salary":122752.96,"hire_date":"10/7/2011","software_experience_years":9.7},
    {"employee_id":443,"department":"Finance","salary":69727.09,"hire_date":"5/12/2017","software_experience_years":16.4},
    {"employee_id":444,"department":"Product","salary":147278.59,"hire_date":"9/5/2012","software_experience_years":12.1},
    {"employee_id":445,"department":"Marketing","salary":73665.78,"hire_date":"8/17/2021","software_experience_years":13.5},
    {"employee_id":446,"department":"Product","salary":125479.03,"hire_date":"7/31/2019","software_experience_years":18.4},
    {"employee_id":447,"department":"Product","salary":137826.91,"hire_date":"12/12/2020","software_experience_years":16.9},
    {"employee_id":448,"department":"Sales","salary":76782.8,"hire_date":"3/4/2017","software_experience_years":16.5},
    {"employee_id":449,"department":"Marketing","salary":66661.4,"hire_date":"5/25/2017","software_experience_years":15.1},
    {"employee_id":450,"department":"Product","salary":72414.19,"hire_date":"10/14/2015","software_experience_years":10.8},
    {"employee_id":451,"department":"Product","salary":76901.31,"hire_date":"4/5/2012","software_experience_years":14.8},
    {"employee_id":452,"department":"Marketing","salary":57477.49,"hire_date":"1/9/2018","software_experience_years":2.8},
    {"employee_id":453,"department":"Marketing","salary":119990.29,"hire_date":"2/4/2011","software_experience_years":17.8},
    {"employee_id":454,"department":"Sales","salary":114234.9,"hire_date":"5/18/2012","software_experience_years":4.4},
    {"employee_id":455,"department":"Sales","salary":119772.61,"hire_date":"6/30/2012","software_experience_years":0.1},
    {"employee_id":456,"department":"Sales","salary":105576.56,"hire_date":"1/5/2012","software_experience_years":19.0},
    {"employee_id":457,"department":"Finance","salary":141592.2,"hire_date":"12/17/2019","software_experience_years":2.0},
    {"employee_id":458,"department":"Sales","salary":120316.62,"hire_date":"9/7/2016","software_experience_years":4.3},
    {"employee_id":459,"department":"Marketing","salary":134130.34,"hire_date":"12/2/2012","software_experience_years":15.0},
    {"employee_id":460,"department":"Product","salary":142966.36,"hire_date":"8/1/2018","software_experience_years":12.1},
    {"employee_id":461,"department":"Finance","salary":107487.24,"hire_date":"5/26/2017","software_experience_years":14.1},
    {"employee_id":462,"department":"Engineering","salary":131182.9,"hire_date":"6/27/2020","software_experience_years":17.8},
    {"employee_id":463,"department":"Finance","salary":111941.32,"hire_date":"7/28/2017","software_experience_years":1.9},
    {"employee_id":464,"department":"Finance","salary":146585.37,"hire_date":"3/24/2018","software_experience_years":10.9},
    {"employee_id":465,"department":"Product","salary":112393.32,"hire_date":"2/19/2013","software_experience_years":7.4},
    {"employee_id":466,"department":"Engineering","salary":138163.29,"hire_date":"10/23/2013","software_experience_years":2.2},
    {"employee_id":467,"department":"Engineering","salary":99898.81,"hire_date":"10/4/2012","software_experience_years":6.5},
    {"employee_id":468,"department":"Marketing","salary":72171.87,"hire_date":"4/28/2019","software_experience_years":15.5},
    {"employee_id":469,"department":"Marketing","salary":123355.7,"hire_date":"2/11/2016","software_experience_years":17.8},
    {"employee_id":470,"department":"Finance","salary":118717.36,"hire_date":"10/21/2020","software_experience_years":9.9},
    {"employee_id":471,"department":"Sales","salary":88320.88,"hire_date":"11/19/2020","software_experience_years":16.2},
    {"employee_id":472,"department":"Sales","salary":95909.56,"hire_date":"6/21/2018","software_experience_years":12.3},
    {"employee_id":473,"department":"Sales","salary":91882.11,"hire_date":"8/28/2017","software_experience_years":16.2},
    {"employee_id":474,"department":"Finance","salary":97889.44,"hire_date":"3/6/2015","software_experience_years":4.4},
    {"employee_id":475,"department":"Finance","salary":63273.51,"hire_date":"9/23/2015","software_experience_years":18.1},
    {"employee_id":476,"department":"Engineering","salary":128505.74,"hire_date":"5/24/2016","software_experience_years":1.3},
    {"employee_id":477,"department":"Engineering","salary":100327.14,"hire_date":"3/24/2017","software_experience_years":5.5},
    {"employee_id":478,"department":"Product","salary":127660.68,"hire_date":"10/2/2010","software_experience_years":9.7},
    {"employee_id":479,"department":"Engineering","salary":89881.52,"hire_date":"3/20/2013","software_experience_years":1.4},
    {"employee_id":480,"department":"Product","salary":88076.07,"hire_date":"7/22/2012","software_experience_years":13.2},
    {"employee_id":481,"department":"Finance","salary":83284.97,"hire_date":"4/13/2014","software_experience_years":15.6},
    {"employee_id":482,"department":"Sales","salary":72902.93,"hire_date":"7/2/2012","software_experience_years":12.6},
    {"employee_id":483,"department":"Sales","salary":58248.37,"hire_date":"1/8/2011","software_experience_years":19.6},
    {"employee_id":484,"department":"Marketing","salary":63876.24,"hire_date":"6/23/2012","software_experience_years":9.7},
    {"employee_id":485,"department":"Finance","salary":110578.21,"hire_date":"4/4/2012","software_experience_years":13.3},
    {"employee_id":486,"department":"Engineering","salary":91766.11,"hire_date":"6/30/2016","software_experience_years":5.0},
    {"employee_id":487,"department":"Sales","salary":99985.35,"hire_date":"3/20/2017","software_experience_years":14.3},
    {"employee_id":488,"department":"Engineering","salary":122487.78,"hire_date":"7/21/2017","software_experience_years":8.9},
    {"employee_id":489,"department":"Finance","salary":82525.21,"hire_date":"5/23/2015","software_experience_years":12.1},
    {"employee_id":490,"department":"Sales","salary":59353.4,"hire_date":"12/3/2021","software_experience_years":14.2},
    {"employee_id":491,"department":"Finance","salary":135894.92,"hire_date":"11/28/2013","software_experience_years":12.3},
    {"employee_id":492,"department":"Sales","salary":142288.82,"hire_date":"3/31/2011","software_experience_years":3.3},
    {"employee_id":493,"department":"Sales","salary":117423.9,"hire_date":"4/7/2010","software_experience_years":10.7},
    {"employee_id":494,"department":"Marketing","salary":77649.34,"hire_date":"3/26/2013","software_experience_years":16.3},
    {"employee_id":495,"department":"Marketing","salary":103076.82,"hire_date":"4/5/2021","software_experience_years":2.6},
    {"employee_id":496,"department":"Finance","salary":66431.78,"hire_date":"9/9/2016","software_experience_years":19.6},
    {"employee_id":497,"department":"Sales","salary":140090.19,"hire_date":"10/14/2012","software_experience_years":3.2},
    {"employee_id":498,"department":"Marketing","salary":52995.03,"hire_date":"7/6/2013","software_experience_years":17.9},
    {"employee_id":499,"department":"Finance","salary":57951.55,"hire_date":"3/8/2016","software_experience_years":2.9},
    {"employee_id":500,"department":"Marketing","salary":72406.91,"hire_date":"5/24/2019","software_experience_years":16.0}]]
  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/users/1", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!response.ok) throw new Error("Failed to fetch user data");
      const data = await response.json();
      setUserData([data]);
      setActiveTab("profile");
    } catch (error) {
      message.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);

      console.log(isLogin);
    }
  };
  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8080/employe"
      );
      if (!response.ok) throw new Error("Failed to fetch recipes");
      const data = await response.json();
      const formattedData = data.recipes.map((recipe) => ({
        key: recipe.id.toString(),
        name: recipe.name,
        ingredients: recipe.ingredients,
      }));
      setRecipes(formattedData);
      setActiveTab("recipes");
    } catch (error) {
      message.error(`Error fetching recipes: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  const fetchImage = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/quotes");
      if (!response.ok) throw new Error("Failed to fetch quotes");
      const data = await response.json();
      const formattedData = data.quotes.map((quote) => ({
        key: quote.id.toString(),
        quote: quote.quote,
        author: quote.author,
      }));
      setqoutes(formattedData);
      setActiveTab("qoute");
    } catch (error) {
      message.error(`Error fetching quotes: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  const handleSignOut = () => {
    setIsLogin(false);
    navigate("/");
    localStorage.removeItem("accessToken");
    setUserData([]);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} />
      </Header>
      <Layout>
        <Sider width={220} theme="dark">
          <Menu mode="inline" theme="dark">
            <Menu.Item key="1" onClick={fetchUserData} icon={<UserOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item key="2" onClick={fetchRecipes}>
              Food Recipes
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => setActiveTab("settings")}
              icon={<SettingOutlined />}
            >
              Settings
            </Menu.Item>
            <Menu.Item key="4" onClick={fetchImage}>
              Quotes
            </Menu.Item>
            <Menu.Item key="5" onClick={() => setActiveTab("student-result")}>
              Student result
            </Menu.Item>
            <Menu.Item key="6" icon={<LogoutOutlined />}>
              <Button type="link" onClick={handleSignOut}>
                Sign out
              </Button>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ margin: "20px", padding: 24, background: "#fff" }}>
          {activeTab === "dashboard" && <h2>Welcome, Good Evening!</h2>}
          {activeTab === "settings" && <h2>Settings Page</h2>}
          {activeTab === "recipes" && (
            <Card
              title="Food Recipes"
              style={{ maxWidth: 900, margin: "auto" }}
            >
              {loading ? (
                <Spin size="large" />
              ) : recipes.length > 10 ? (
                <Foodrecipe
                  dataSource={recipes}
                  columns={[
                    { title: "Recipe Name", dataIndex: "name", key: "name" },
                    {
                      title: "Ingredients",
                      dataIndex: "ingredients",
                      key: "ingredients",
                    },
                  ]}
                  pagination={{ pageSize: 5 }}
                />
              ) : (
                <p>No recipes available.</p>
              )}
            </Card>
          )}
          {activeTab === "profile" && (
            <Card
              title="User Profile"
              style={{ maxWidth: 900, margin: "auto" }}
            >
              {loading ? (
                <Spin size="large" />
              ) : userData.length > 0 ? (
                <Userdata
                  dataSource={userData}
                  columns={[
                    {
                      title: "Username",
                      dataIndex: "username",
                      key: "username",
                    },
                    { title: "Email", dataIndex: "email", key: "email" },
                    {
                      title: "Full Name",
                      key: "fullName",
                      render: (record) =>
                        `${record.firstName} ${record.lastName}`,
                    },
                    { title: "Phone", dataIndex: "phone", key: "phone" },
                    {
                      title: "Birth Date",
                      dataIndex: "birthDate",
                      key: "birthDate",
                    },
                  ]}
                />
              ) : (
                <p>No user data available.</p>
              )}2
            </Card>
          )}
          {activeTab === "qoute" && (
            <Card title="Quotes" style={{ maxWidth: 1000, margin: "auto" }}>
              {loading ? (
                <Spin size="large" />
              ) : qoute.length > 0 ? (
                <Qoutes
                  dataSource={qoute}
                  columns={[
                    { title: "Quote", dataIndex: "quote", key: "quote" },
                    { title: "Author", dataIndex: "author", key: "author" },
                  ]}
                  pagination={{ pageSize: 9 }}
                />
              ) : (
                <p>No quotes available.</p>
              )}
            </Card>
          )}
          {activeTab === "student-result" && <ResultForm />}
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        Ant Design© ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
