import React from 'react'
import './cloudfee.css'
import TopImage from '../../images/camhung/slide1.jpg'
import CloudImage from '../../images/_creme-brulee.jpg'
import CloudeImage2 from '../../images/_creamy.jpg'
import Camhung1 from '../../images/camhung/camhung1.jpg'
import Camhung2 from '../../images/camhung/camhung2.jpg'
import Story from '../../images/camhung/story1.jpg'
import {AiOutlineFacebook, AiOutlineLink} from 'react-icons/ai'
import {SiZalo} from 'react-icons/si'
import {BsFillChatLeftFill} from 'react-icons/bs'
// import { BsHeadphones } from 'react-icons/bs'
const CamHung = () => {
  return (
    <div className="container-fluid container__camhung">
        <div className="container__camhung--top">
            <img src={TopImage} alt="" />
        </div>
        <div className="container__camhung--contains container-fluid">
            <div className="container container__cloudfee">
                <div className="container__cloudfee--title col-lg-12 col-md-12 col-sm-12 col-12"><h1>CLOUDFEE</h1>
                <p>Được kết hợp từ <b>Cloud</b>(đám mây) và cof<b>Fee</b> (cà phê), <b>CloudFee</b> gợi mở <br /> về một 
                thế hệ cà phê mới, êm mượt như mây.</p></div>
                <div className="container__cloudfeelayout">
                    <ul className="container__cloudfeelayout col-lg-12 col-md-12 col-sm-12 col-12">
                    <li className="container__cloudfeelayout col-lg-6 col-md-6 col-sm-12 col-12 pt-2">
                        <img src={CloudImage} alt="" />
                    </li>
                    <li className="container__cloudfee col-lg-6 col-md-6 col-sm-12 col-12">
                        <p className="container__cloudfee--title">CLOUDFEE</p>
                        <h2 className="container__cloudfee--name"><i>Creme Brulee</i></h2>
                        <p className='container__cloudfee--descript'><b>Thức uống "chiều chuộng bản thân" bậc nhất</b> cho những ai thích vị ngọt ngào hay muốn thưởng thức sự kết hợp độc đáo 
                        giữa món tráng miệng và thức uống.
                        </p>
                        <a href='' className="container__cloudfee--button">
                        Thử ngay
                        </a>
                    </li>
                    <li className="container__cloudfee col-lg-6 col-md-6 col-sm-12 col-12">
                        <p className="container__cloudfee--title">CLOUDFEE</p>
                        <h2 className="container__cloudfee--name"><i>Creamy</i></h2>
                        <p className='container__cloudfee--descript'><b>Thức uống "đánh thức" năng lượng ngày mới</b> hợp cho những ai mới bước vào thế giới cà phê hoặc ghiền cà phê nhưng muốn khám phá thêm nhiều hương vị mới.
                        </p>
                        <a href='' className="container__cloudfee--button">
                        Thử ngay
                        </a>
                    </li>
                    <li className="container__cloudfeelayout col-lg-6 col-md-6 col-sm-12 col-12">
                        <img src={CloudeImage2} alt="" />
                    </li>
                    </ul>
                </div>
            </div>
            <div className="container container__video col-lg-12 col-md-12 col-sm-12 col-12">
                <p className="container__video--title col-lg-12 col-md-12 col-sm-12 col-12">CÀ PHÊ CÓ DÀNH CHO TẤT CẢ MỌI NGƯỜI?</p>
                <div className="container__video--item col-lg-12 col-md-12 col-sm-12 col-12">
                    <iframe width="998" height="559" src="https://www.youtube.com/embed/t5I96ycncPA" title="CloudFee: Cà phê có dành cho tất cả mọi người?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p className='container__video--item'>Bạn có biết, mỗi ngày có hơn 2 tỷ cốc cà phê được uống trên toàn thế giới? Có người pha cùng sữa, có người rót thêm kem béo, hay kết hợp cùng… rượu whiskey, nhưng không phải ai cũng có thể thưởng thức cà phê một cách ngon lành. Bằng niềm khao khát mang ẩm thực thế giới vào từng ly cà phê bản địa, Edward Teonadi - Giám đốc phát triển sản phẩm tại The Coffee House đã tạo nên thế hệ cà phê mới mang tên CloudFee. Và giờ đây, bất kỳ ai ghé Nhà cũng có thể tìm thấy hương vị cà phê cho riêng mình.</p>
                {/* <a className='container__video--item'>Đọc trọn câu chuyện</a> */}
            </div>
            <div className="container container__cloudfee">
                <div className="container__cloudfeelayout">
                    <ul className="container__cloudfeelayout col-lg-12 col-md-12 col-sm-12 col-12">
                    <li className="container__cloudfeelayout col-lg-6 col-md-6 col-sm-12 col-12 pt-2">
                        <img src={Camhung1} className='img__diff' alt="" />
                    </li>
                    <li className="container__cloudfee col-lg-6 col-md-6 col-sm-12 col-12">
                        {/* <p className="container__cloudfee--title">CLOUDFEE</p> */}
                        <h2 className="container__cloudfee--text">CÀ PHÊ NGON CHỈ CÓ VỊ ĐẮNG?</h2>
                        <p className='container__cloudfee--descript'>Từ ý tưởng về CloudFee của Edward, anh Phạm Phúc Thịnh - barista của The Coffee House nhận ra: Cà phê không nhất thiết phải đắng, phải chua thì mới ngon. Đôi khi một chút biến tấu, một chút ngọt ngào để yêu chiều bản thân mới thật sự quan trọng. Và đó là cách CloudFee Creme Brulee ra đời.
                        </p>
                        <a href='' className="container__cloudfee--button">
                        Nghe Thịnh kể chuyện
                        </a>
                    </li>
                    <li className="container__cloudfee col-lg-6 col-md-6 col-sm-12 col-12">
                        {/* <p className="container__cloudfee--title">CLOUDFEE</p> */}
                        <h2 className="container__cloudfee--name">CÀ PHÊ ĐÂU CHỈ LÀ THỨC UỐNG</h2>
                        <p className='container__cloudfee--descript' >Trong ly cà phê dành cho người mình thương có gì? Khi nghe Edward chia sẻ về thế hệ cà phê mới CloudFee, anh Nguyễn Hoàng Hiếu - barista của The Coffee House chợt nhớ tới vợ mình. Cô ngại vị đắng của cà phê, nhưng cần một thức uống tỉnh táo mỗi sáng. Và CloudFee Creamy là món quà anh tặng cho người phụ nữ anh yêu.</p>
                        <a href='' className="container__cloudfee--button">
                        Hiếu bật mí trong video này
                        </a>
                    </li>
                    <li className="container__cloudfeelayout col-lg-6 col-md-6 col-sm-12 col-12">
                        <img src={Camhung2} alt="" className='img__diff'/>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="container container__cloudfee--story col-lg-12 col-sm-12 col-md-12 col-12">
                <h2 className="container__cloudfee--text col-lg-12 col-sm-12 col-md-12 col-12">CHUYỆN CÀ PHÊ</h2>
                <div className="cloudfee__name--container col-lg-12 col-sm-12 col-md-12 col-12">
                    <img src={Story} alt="" />
                    <div className="cloudfee__name--item">
                        <span>Hơn cả một loại thức uống để ngày mới tươi ngay hay yêu chiều khẩu vị vào buổi chiều, mỗi ly CloudFee còn gắn liền với một câu chuyện thú vị.</span>
                        <br /><button>CÙNG ĐÓN CHỜ</button>
                    </div>
                </div>
                <img src={Story} className = "small__img" />
            </div>
        </div>
        <div className="container-fluid container__icon">
            {/* <a className='hotline'><BsHeadphones /></a> */}
            <ul className="container__icon">
                <a href="" className="container__icon--item">
                    <li><AiOutlineFacebook /></li>
                </a>
                <a href="" className="container__icon--item">
                    <li><SiZalo /></li>
                </a>
                <a href="" className="container__icon--item">
                    <li><BsFillChatLeftFill /></li>
                </a>
                <a href="" className="container__icon--item">
                    <li><AiOutlineLink /></li>
                </a>
            </ul>
        </div>
    </div>
  )
}

export default CamHung