import {SiOpenaigym} from 'react-icons/si'
import {AiOutlineCaretDown} from 'react-icons/ai'


export const links = [
    {
        name: "Trang Chủ",
        path: '/'
    },
    {
        name: "Cà Phê",
        path: '/collections/ca-phe-tai-nha'
    },
    {
        name: "Trà",
        path: '/collections/tra-tai-nha'
    },
    {
        name: "Menu",
        path: 'collections/coffee',
    },
    {
        name: "Chuyện nhà",
        path: '/pages/story'
    },
    {
        name: "Cảm hứng CloudFee", 
        path: '/pages/camhung'
    }, 
    {
        name: "Cửa hàng", 
        path: '/pages/shop'
    }, 
]




export const storyDropdown = [
    {
        name: 'Coffeeholic', 
        path: '/pages/story/coffeeholic', 
        children: [
            {
                name: '#chuyencafe', 
                path: '/pages/story/coffeeholic/chuyencafe'
            }, 
            {
                name: '#phacaphe', 
                path: '/pages/story/coffeeholic/phacaphe'
            }
        ]
    }, 
    {
        name: 'Teaholic', 
        path: '/pages/story/teaholic', 
        children: [
            {
                name: '#phatra', 
                path: '/pages/story/teaholic/phatra'
            }, 
            {
                name: '#cauchuyenvetra', 
                path: '/pages/story/teaholic/cauchuyenvetra'
            }
        ]
    }, 
    {
        name: 'Blog', 
        path: '/pages/story/blog', 
        children: [
            {
                name: "#inthemood", 
                path: '/pages/story/blog/inthemood'
            }, 
            {
                name: '#Review', 
                path: '/pages/story/blog/review'
            }, 
            {
                name: '#HumanofTCH', 
                path: '/pages/story/blog/humanoftch'
            }
        ]
    }
]

export const cafeDropdown = [
    {
        name: 'Tất cả',
        path: '/collections/all'
    }, 
    {
        name: "Cà Phê",
        path: '/collections/coffee', 
        children: [
            {  
                name: "Cà Phê Việt Nam", 
                path: '/collections/coffee/ca-phe-viet-nam'
            }, 
            {
                name: 'Cà Phê Máy', 
                path: '/collections/coffee/ca-phe-may'
            }, 
            {
                name: 'Cold Brew', 
                path: '/collections/coffee/cold-brew'
            }
        ]
    }, 
    {
        name: 'CloudFee', 
        path: '/collections/cloudfee', 
        children: [
            {  
                
                
            }, 
            {
                name: 'Creme Brulee', 
                path: '/collections/cloudfee/creme-brulee'
            },
            {
                name: 'Đoàn viên', 
                path: '/collections/cloudfee/đoan-vien'
            }
        ]
    }, 
    {
        name: 'Trà', 
        path: '/collections/tea', 
        children: [
            {  
                name: "Trà trái cây", 
                path: '/collections/tea/tra-trai-cay'
                
            }, 
            {
                name: 'Trà sữa Macchiato', 
                path: '/collections/tea/tra-sua-macchiato'
            }
        ]
    }, 
    {
        name: 'Hi-Tea Healthy', 
        path: '/collections/hitea', 
        children: [
            {  
                name: "Hi-Tea Trà", 
                path: '/collections/hitea/hi-tea-tra'
                
            }, 
            {
                name: 'Hi-Tea đá tuyết', 
                path: '/collections/hitea/hi-tea-da-tuyet'
            }, 
            {
                name: 'Hi-Tea Bling Bling', 
                path: '/collections/hitea/hi-tea-bling-bling'
            }
        ]
    }, 
    {
        name: "Bánh & Snack", 
        path: '/collections/banh', 
        children: [
            {  
                name: "Bánh mặn", 
                path: '/collections/banh/banh-man'
                
            }, 
            {
                name: 'Bánh Ngọt', 
                path: '/collections/banh/banh-ngot'
            }, 
            {
                name: 'Snack', 
                path: '/collections/banh/snack'
            }
        ]
    }, 
    {
        name: "Tại nhà", 
        path: "/collections/tainha", 
        children: [
            {  
                name: "Cà phê tại nhà", 
                path: '/collections/tainha/ca-phe-tai-nha'
                
            }, 
            {
                name: 'Trà tại nhà', 
                path: '/collections/tainha/tra-tai-nha'
            }
        ]
    }, 
    {
        name: "Thức uống khác", 
        path: '/collections/difference', 
        children: [
            {
                name: 'Chocolate', 
                path: '/collections/difference/chocolate'
            }
        ]
    }
]


export const headerMeta = [
    {
        image: require('./images/icon1.jpg'), 
        title: '154 cửa hàng khắp cả nước'
    }, 
    {
        image: require('./images/icon2.jpg'), 
        title: 'Đặt hàng: 1800.6936'
    }, 
    {
        image: require('./images/icon3.jpg'), 
        title: 'Freeship từ 50.000vnđ'
    }
]

export const slideShow = [
    {
        image: require('./images/slide1.png')
    }, 
    {
        image: require('./images/slide2.png')
    },
    {
        image: require('./images/slide3.png')
    }
]


export const homeProduct = [
    {
        id: 1, 
        image: require('./images/sp1.jpg'), 
        name: "CloudFee Creme Brulee Caramel", 
        cost: '49.000'
    }, 
    {
        id:2, 
        image: require('./images/sp2.jpg'),
        name: "CloudFee Creamy Hạnh Nhân Nướng", 
        cost: '39.000'
    }, 
    {
        id: 3, 
        image: require('./images/sp3.jpg'),
        name: "Hi-Tea Vải", 
        cost: '49.000'
    }, 
    {
        id: 4, 
        image: require('./images/sp4.jpg'), 
        name: "Cà Phê Sữa Đá", 
        cost: '29.000'
    }, 
    {
        id: 5, 
        image: require('./images/sp5.jpg'), 
        name: "Bánh Mì VN Thịt Nguội", 
        cost: '35.000'
    }, 
    {
        id: 6, 
        image: require('./images/sp6.jpg'), 
        name: "Mochi Kem Chocolate", 
        cost: '19.000'
    }
]

export const coffeeHolic = [
    {
        image: require('./images/story/coffeeHolic/story3.jpg'), 
        date: '15/09/2022', 
        title: 'CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE...', 
        descript: 'Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương vị cà phê đậm đà từ 100% cà phê Robusta cùng vị sữa béo nhẹ cho bạn một trải nghiệm...'
    }, 
    {
        image: require('./images/story/coffeeHolic/story4.jpg'), 
        date: '11/03/2022', 
        title: 'CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ...', 
        descript: 'Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không...'
    },
    {
        image: require('./images/story/coffeeHolic/story5.jpg'), 
        date: '07/03/2022', 
        title: 'BẬT MÍ NHIỆT ĐỘ LÝ TƯỞNG ĐỂ PHA CÀ PHÊ...', 
        descript: 'Nhiệt độ nước là một yếu tố quan trọng để có thể tạo nên những tách cà phê thơm ngon. Bạn đã biết nhiệt độ nước lý tưởng để pha...'
    }
]


export const teaHolic = [
    {
        image: require('./images/story/TeaHolic/story2.jpg'), 
        date: '22/08/2022', 
        title: 'CŨNG LÀ ĂN BÁNH, THƯỞNG TRÀ, NGẮM TRĂNG - GEN Z LÀM GÌ CHO BỚT NHẠT?', 
        descript: 'Trung thu là dịp mà bất kỳ ai cũng có thể “bé lại” để niềm háo hức đón Tết Đoàn viên, ăn bánh, thưởng trà… vẫn đầy ắp trong lòng....'
    }, 
    {
        image: require('./images/story/TeaHolic/story3.jpg'), 
        date: '16/08/2022', 
        title: '“KHUẤY ĐỂ THẤY TRĂNG" - KHUẤY LÊN...', 
        descript: 'Năm 2022 là năm đề cao sức khỏe tinh thần nên giới trẻ muốn tận hưởng một Trung thu với nhiều trải nghiệm mới mẻ, rôm rả cùng bạn bè...'
    },
    {
        image: require('./images/story/TeaHolic/story4.jpg'), 
        date: '12/08/2022', 
        title: '“KHUẤY ĐỂ THẤY TRĂNG” - HOT TREND MỞ', 
        descript: '“Khuấy để thấy trăng” - trải nghiệm “ có 1 không 2” được The Coffee House tung ra cho mùa trung thu năm nay, hứa hẹn làm giới trẻ háo...'
    }
]
export const blog = [
    {
        image: require('./images/story/blog/story1.jpg'), 
        date: '14/02/2022', 
        title: 'LỄ TÌNH NHÂN, CÙNG CRUSH ĐI ĐÂU?', 
        descript: 'Tadaaaa, hết Tết thì Valentine đầy yêu thương lại đang đến rồi nè. Lễ tình nhân, dẫn crush đi quán nào? Nhất định phải cùng người ấy đến Nhà hẹn...'
    }, 
    {
        image: require('./images/story/blog/story2.jpg'), 
        date: '11/02/2022', 
        title: 'THE COFFEE HOUSE - QUÁN CÀ PHÊ LÝ...', 
        descript: 'Những ngày cuối năm, đầu năm mới, bạn lên kế hoạch để gặp gỡ những người yêu, thương, quý, mến... Vậy bạn đã tìm được điểm hẹn lý tưởng chưa,...'
    },
    {
        image: require('./images/story/blog/story3.jpg'), 
        date: '24/01/2022', 
        title: 'CHAI FRESH LUÔN BÊN BẠN TRONG MỌI', 
        descript: 'Với sự kết nối của The Coffee House, những thức trà và cà phê dạng chai Fresh sẽ là người bạn thân thiết, tuyệt vời của bạn trên mọi nẻo...'
    }
]


export const slideHome = [
    {
        id: 1, 
        title: 'The Coffee House Vinh Lotte Mart', 
        descript: 'Nhà mới Nghệ An toạ lạc tại Lotte Mart (TP. Vinh), nằm bên cạnh những con phố sầm uất nhộn nhịp là không gian ấm cúng và hương vị quen thuộc từ Nhà, mang đến nhiều cung bậc cảm xúc cho những buổi hẹn hò cùng bạn bè.', 
        child: [
            {
                id: 1, 
                img: require('./images/bannerslide1.jpg')
            }, 
        ]
    }
]

export const Story = [
    {
        name: "Tất cả", 
        path: "/pages/story", 
        child: [
            {
                img: require('./images/story/TeaHolic/story2.jpg'), 
                title: "CŨNG LÀ ĂN BÁNH, THƯỞNG TRÀ, NGẮM TRĂNG - GEN Z LÀM GÌ CHO BỚT NHẠT?", 
                descript: 'Trung thu là dịp mà bất kỳ ai cũng có thể “bé lại” để niềm háo hức đón Tết Đoàn viên, ăn bánh, thưởng trà… vẫn đầy ắp trong lòng....', 
                date: '22/08/2022'
            },
            {
                img: require('./images/story/coffeeHolic/story1.jpg'), 
                title: "NHỮNG LOẠI TRÀ CÓ HƯƠNG VÀ VỊ “ĐỔ GỤC” KHÁCH THĂM XUÂN NHÀ BẠN", 
                descript: 'Tết đang “lấp ló đầu ngõ” và bạn đang chuẩn bị cho một năm mới an khang, sum vầy. Tìm kiếm những thức trà, thức bánh thật ngon để tiếp đãi khách đến thăm nhà. Nếu vậy, Nhà sẽ bật mí những loại trà có hương và vị “đổ gục” những vị khách đến thăm xuân nhà bạn nhé!', 
                date: '21/01/2022'
            }
        ], 
        children: [
            {
                name: 'CoffeeHolic', 
                slide: require('./images/story/coffeeHolic/story2.jpg'), 
                child: [
                    {
                        img: require('./images/story/coffeeHolic/story7.jpg'), 
                        title: 'CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON', 
                        descript: 'Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương vị...', 
                        date: '15/09/2022'
                    }, 
                    {
                        img: require('./images/story/coffeeHolic/story4.jpg'), 
                        title: 'CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT', 
                        descript: 'Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến...', 
                        date: '11/03/2022'
                    }, 
                    {
                        img: require('./images/story/coffeeHolic/story5.jpg'), 
                        title: 'BẬT MÍ NHIỆT ĐỘ LÝ TƯỞNG ĐỂ PHA CÀ PHÊ NGON, ĐẬM ĐÀ HƯƠNG VỊ', 
                        descript: 'Nhiệt độ nước là một yếu tố quan trọng để có thể tạo nên những...', 
                        date: '07/03/2022'
                    }
                ]
            },
            {
                name: 'Teaholic', 
                slide: require('./images/story/TeaHolic/story1.jpg'), 
                child: [
                    {
                        img: require('./images/story/TeaHolic/story3.jpg'), 
                        title: '“KHUẤY ĐỂ THẤY TRĂNG" - KHUẤY LÊN NIỀM HẠNH PHÚC: TRẢI NGHIỆM KHÔNG THỂ BỎ...', 
                        descript: 'Năm 2022 là năm đề cao sức khỏe tinh thần nên giới trẻ muốn tận...', 
                        date: '16/08/2022'
                    }, 
                    {
                        img: require('./images/story/TeaHolic/story4.jpg'), 
                        title: '“KHUẤY ĐỂ THẤY TRĂNG” - HOT TREND MỞ MÀN MÙA TRUNG THU HẤP DẪN ĐÔNG ĐẢO...', 
                        descript: '“Khuấy để thấy trăng” - trải nghiệm “ có 1 không 2” được The Coffee...', 
                        date: '12/08/2022'
                    }, 
                    {
                        img: require('./images/story/coffeeHolic/story5.jpg'), 
                        title: '10 LỢI ÍCH KHÔNG NGỜ CỦA TRÀ HOA HIBISCUS', 
                        descript: 'Với rất nhiều lợi ích vượt trội, trà hoa Hibiscus được nhiều chị em ưu...', 
                        date: '07/06/2022'
                    }
                ]
            },
            {
                name: 'Blog', 
                slide: require('./images/story/blog/banner.jpg'), 
                child: [
                    {
                        img: require('./images/story/blog/story.jpg'), 
                        title: 'CŨNG LÀ ĂN BÁNH, THƯỞNG TRÀ, NGẮM TRĂNG - GEN Z LÀM GÌ CHO BỚT NHẠT?', 
                        descript: 'Trung thu là dịp mà bất kỳ ai cũng có thể “bé lại” để niềm...', 
                        date: '22/08/2022'
                    }, 
                    {
                        img: require('./images/story/blog/story1.jpg'), 
                        title: 'LỄ TÌNH NHÂN, CÙNG CRUSH ĐI ĐÂU?', 
                        descript: 'Tadaaaa, hết Tết thì Valentine đầy yêu thương lại đang đến rồi nè. Lễ tình...', 
                        date: '14/02/2022'
                    }, 
                    {
                        img: require('./images/story/blog/story4.jpg'), 
                        title: 'THE COFFEE HOUSE - QUÁN CÀ PHÊ LÝ TƯỞNG ĐỂ HỘI HỌP BẠN BÈ MÙA TẾT NÀY', 
                        descript: 'Những ngày cuối năm, đầu năm mới, bạn lên kế hoạch để gặp gỡ những...', 
                        date: '11/02/2022'
                    }
                ]
            }
        ]
    }, 
    {
        name: "Coffeeholic", 
        path: '/pages/story/coffeeholic',      
    },
    {
        name: "Teaholic", 
        path: '/pages/story/teaholic'
    },
    {
        name: "Blog", 
        path: '/pages/story/blog'
    }
]


