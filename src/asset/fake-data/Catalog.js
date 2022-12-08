const Catalogs = [
    {
        id: 1,
        name: 'Cà Phê', 
        path: 'coffee',
        img: ('../../images/coffee/sp2.jpg'),
        children:[
            {
                name: "Cà Phê Việt Nam", 
                path: 'Cà-phê-việt-nam', 
                TypeCatalogParent: "Cà Phê",
                img: ('../../images/coffee/sp4.jpg'),
                discript: 'Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.'
            }, 
            {
                name: 'Cà Phê Máy', 
                path: 'Cà-phê-máy', 
                TypeCatalogParent: "Cà Phê",
                img: ('../../images/coffee/sp8.jpg'),
                discript: 'Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương vị cà phê đậm đà từ 100% cà phê Robusta cùng vị sữa béo nhẹ cho bạn một trải nghiệm hương vị cà phê hoàn toàn mới.'
            }, 
            {
                name: 'Cold Brew', 
                path: 'Cold-Brew', 
                TypeCatalogParent: "Cà Phê",
                img: ('../../images/coffee/sp19.jpg'),
                discript: 'Thanh mát và cân bằng với hương vị cà phê nguyên bản 100% Arabica Cầu Đất cùng sữa tươi thơm béo cho từng ngụm tròn vị, hấp dẫn.'
            }
        ]
    }, 
    {
        id:2,
        name: 'CloudFee', 
        path: 'cloudfee',
        img: ('../../images/cloudfee/sp1.jpg'),
        children: [
            {
                name: "Creamy", 
                path: 'creamy', 
                TypeCatalogParent: "CloudFee",
                img: ('../../images/cloudfee/sp2.jpg'),
                discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
            }, 
            {
                name: 'Creme Brulee', 
                path: 'Creme-Brulee', 
                TypeCatalogParent: "CloudFee",
                img: ('../../images/cloudfee/sp5.jpg'), 
                discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
            }, 
            {
                name: 'Đoàn viên', 
                path: 'Đoàn-Viên',
                TypeCatalogParent: "CloudFee",
                img: ('../../images/cloudfee/sp7.jpg'),
                discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
            },
        ]
    }, 
    {
        id: 3,
        name: 'Trà', 
        path: 'tea',
        img: ('../../images/house/sp12.jpg'),
        children: [
            {
                name: "Trà trái cây", 
                path: 'Trà-trái-cây',
                TypeCatalogParent: "Trà",
                img: ('../../images/tra/sp1.jpg'), 
                discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
            }, 
            {
                name: 'Trà sữa Macchiato', 
                path: 'Trà-sữa-Machiato', 
                TypeCatalogParent: "Trà",
                img: ('../../images/tra/sp10.jpg') ,
                discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
            },
        ]
    }, 
    {
        id: 4,
        name: 'Hi-Tea Healthy', 
        path: 'hitea',
        img: ('../../images/hitea/sp1.jpg'),
        children: [
            {
                name: "Hi-Tea Trà", 
                path: 'Hi-Tea-Trà', 
                TypeCatalogParent: "Trà",
                img: ('../../images/hitea/sp2.jpg'),
                discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
            }, 
            {
                name: 'Hi-Tea đá tuyết', 
                path: 'Hi-Tea-đá-tuyết', 
                TypeCatalogParent: "Trà",
                img: ('../../images/hitea/sp7.jpg'),
                discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
            }, 
            {
                name: 'Hi-Tea Bling Bling', 
                path: 'Hi-Tea-bling-bling', 
                TypeCatalogParent: "Trà",
                img: ('../../images/hitea/sp8.jpg'),
                discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
            }, 
        ]
    }, 
    {
        id: 5,
        name: "Bánh & Snack", 
        path: 'banh', 
        img: ('../../images/banh/sp2.jpg'),
        children: [
            {
                name: "Bánh mặn", 
                path: 'Bánh-Mặn', 
                TypeCatalogParent: "Bánh & Snack",
                img: ('../../images/banh/sp3.jpg'),
                discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
            }, 
            {
                name: 'Bánh Ngọt', 
                path: 'Bánh-Ngọt', 
                TypeCatalogParent: "Bánh & Snack",
                img: ('../../images/banh/sp8.jpg'),
                discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
            }, 
            {
                name: 'Snack', 
                path: 'Snack', 
                TypeCatalogParent: "Bánh & Snack",
                img: ('../../images/banh/sp18.jpg'),
                discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
            },
        ]
    }, 
    {
        id: 6,
        name: "Tại nhà", 
        path: "Home",
        img: ('../../images/house/sp2.jpg'),
        children: [
            {
                name: "Cà phê tại nhà", 
                path: 'Cà-Phê-Tại-Nhà', 
                TypeCatalogParent: "Tại nhà",
                img: ('../../images/house/sp3.jpg'),
                discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
            }, 
            {
                name: "Trà Tại Nhà", 
                path: "Trà-Tại-Nhà", 
                TypeCatalogParent: "Tại nhà",
                img: ('../../images/house/sp19.jpg'),
                discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
            }, 
        ]
    }, 
    {
        id: 7,
        name: "Thức uống khác", 
        path: 'difference',
        img: ('../../images/difference/sp1.jpg'),
        children: [
            {
                name: "Chocolate", 
                path: 'Chocolate', 
                TypeCatalogParent: "Thức uống khác",
                img: ('../../images/difference/sp2.jpg'), 
                discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
            }
        ]
    }
]

export default Catalogs