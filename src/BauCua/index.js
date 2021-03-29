import React, {useState, useEffect} from 'react'
import DanhSachCuoc from './DanhSachCuoc';
import XucXac from './XucXac';


const danhSachXucXac = [
    {ten: 'bau', hinhAnh: './img_baucua/bau.png'},
    {ten: 'cua', hinhAnh: './img_baucua/cua.png'},
    {ten: 'tom', hinhAnh: './img_baucua/tom.png'},
    {ten: 'ca', hinhAnh: './img_baucua/ca.png'},
    {ten: 'ga', hinhAnh: './img_baucua/ga.png'},
    {ten: 'nai', hinhAnh: './img_baucua/nai.png'}

];
export default function BauCua() {

    const [tienThuong, setTienThuong] = useState(500);
    const [danhSachCuoc, setDanhSachCuoc] = useState(()=>{
        return danhSachXucXac.map((item) =>({
            ...item,
            diemCuoc: 0
        }))
    });
    const [xucXac, setXucXac] = useState([
        {ten: 'bau', hinhAnh: './img_baucua/bau.png'},
        {ten: 'bau', hinhAnh: './img_baucua/bau.png'},
        {ten: 'bau', hinhAnh: './img_baucua/bau.png'},
    ]);

    const xuLyDatCuoc = (item, status) =>{
        const newDanhSachCuoc = danhSachCuoc.map((cuoc) =>{
            if(cuoc.ten === item.ten){
                return{
                    ...cuoc,
                    diemCuoc : status ? cuoc.diemCuoc + 100 : cuoc.diemCuoc - 100
                }
               
            }
            return cuoc;
        });
        setTienThuong(status ? tienThuong - 100 : tienThuong + 100)
        setDanhSachCuoc(newDanhSachCuoc)
    };
    // Tương tự this.setState là hàm bất động bôj
    const xuLyXucXac = () =>{
        const newXucXac = xucXac.map((item)=>{
            // Math.random()* (max-min + 1) +min
            const random = Math.floor(Math.random() * 6);
            return danhSachXucXac[random]
        })

        setXucXac(newXucXac)
    };

    useEffect(() =>{
        // => Tính điểm
        // Lọc danh sách đặt cược
        const danhSachDatCuoc = danhSachCuoc.filter(item => item.diemCuoc);
        let tongDiem = 0;
        // Duyệt qua mảng xúc xắc
        danhSachDatCuoc.forEach(item =>{
            const found = xucXac.find(xucXac => xucXac.ten === item.ten);
            // Tìm thấy item trong danhSachDatCuoc
            if(found){
                tongDiem += item.diemCuoc

            }
        })
        // Duyệt qua mảng xúc xắc đẻ tìm thắng Cược
        xucXac.forEach(item =>{
            const found = danhSachDatCuoc.find(cuoc => cuoc.ten === item.ten);
            if(found){
                tongDiem += found.diemCuoc
            }
        });

        const newDanhSachCuoc = danhSachCuoc.map((item) =>({
            ...item,
            diemCuoc: 0
        }))
             
        setTienThuong(tienThuong + tongDiem);
        setDanhSachCuoc(newDanhSachCuoc);
    }, [xucXac])

    return (
        <div className="bg-secondary baucua-container">
            <div className="w-75 mx-auto">
                <img width="100%" src="./img_baucua/Logo.png" alt="logo"></img>
            </div>
            <div className="text-center  w-25 mx-auto">
                <p className="bg-warning" style={{fontSize:'25px', borderRadius: '10px', border:'5px solid rgb(0,0,0)'}}>Tiền Thưởng: {tienThuong}</p>
            </div>
            <div className ="container-fluid">
                <div className="row">
                    <div className="col-sm-8">
                        <DanhSachCuoc tienThuong={tienThuong} danhSachCuoc={danhSachCuoc} xuLyDatCuoc = {xuLyDatCuoc}/>
                    </div>
                    <div className="col-sm-4">
                        <XucXac xucXac = {xucXac} xuLyXucXac = {xuLyXucXac} />
                    </div>
                </div>
            </div>
        </div>
    )
}
