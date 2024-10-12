import { images } from '@/constants'
import { ImageSourcePropType } from 'react-native'

export enum ECategory {
  BAC_THUOC,
  TRIEU_NGO,
  TRIEU_DINH,
  TRIEU_TIEN_LE,
  TRIEU_LY,
  TRIEU_TRAN,
  TRIEU_HO,
  TRIEU_HAU_LE,
  TRIEU_MAC,
  TRIEU_TAY_SON,
  TRIEU_NGUYEN,
  PHAP_THUOC,
  HIEN_DAI,
}

export interface IData {
  id: number
  image: any
  category: ECategory
  description: string
  title: string
  body: Array<{
    title: string
    image?: ImageSourcePropType
    content: string
  }>
}

export interface ITotalData {
  id: ECategory
  title: string
  start: number | string
  end: number
  image: ImageSourcePropType
  list: IData[]
}

export interface IObjectTotalData {
  [key: number]: ITotalData
}

const bacThuocData: ITotalData = {
  id: ECategory.BAC_THUOC,
  title: 'Bắc thuộc',
  start: '111 BC',
  end: 938,
  image: images.menu_bacthuoc,
  list: [
    {
      id: 20,
      image: images.menu_bacthuoc,  // hình ảnh minh họa về thời kỳ Bắc thuộc
      category: ECategory.LICH_SU,
      title: 'Thời kỳ Bắc thuộc: Giai đoạn Việt Nam bị cai trị bởi các triều đại Trung Quốc',
      description:
        'Thời kỳ Bắc thuộc là giai đoạn trong lịch sử Việt Nam khi đất nước bị đặt dưới quyền cai trị của các triều đại Trung Quốc, bao gồm bốn lần Bắc thuộc chính từ thế kỷ thứ 2 trước Công nguyên đến thế kỷ 15. Dù trải qua sự cai trị lâu dài, người Việt vẫn liên tục nổi dậy để giành lại độc lập.',
      body: [
        {
          title: '1. Bắc thuộc lần thứ nhất (179 hoặc 111 TCN – 40)',
          content: `Bắc thuộc lần thứ nhất bắt đầu khi nhà Triệu, một triều đại cai trị Nam Việt, bị nhà Hán thôn tính vào năm 111 TCN. Thời kỳ này kéo dài đến năm 40, khi Hai Bà Trưng nổi dậy khởi nghĩa, đánh đuổi quân Hán và giành lại độc lập. Đây là thời kỳ đầu tiên người Việt bị cai trị bởi triều đình phương Bắc.`,
        },
        {
          title: '2. Bắc thuộc lần thứ hai (43 – 541)',
          content: `Sau khi khởi nghĩa Hai Bà Trưng thất bại vào năm 43, Việt Nam lại rơi vào thời kỳ Bắc thuộc lần thứ hai, kéo dài gần 500 năm. Các triều đại Trung Quốc như Đông Hán, Đông Ngô, Tào Ngụy, nhà Tấn, nhà Tề, và nhà Lương tiếp tục cai trị Việt Nam. Thời kỳ này kết thúc khi Lý Bí khởi nghĩa và lập ra nhà Tiền Lý, đặt nền móng cho nước Vạn Xuân.`,
        },
        {
          title: '3. Bắc thuộc lần thứ ba (602 – 939)',
          content: `Bắc thuộc lần thứ ba kéo dài từ năm 602, khi nhà Tùy xâm lược và cai trị Việt Nam, đến năm 939, khi Ngô Quyền đánh bại quân Nam Hán trong trận Bạch Đằng, giành lại độc lập cho đất nước. Trong thời kỳ này, các triều đại như nhà Tùy, nhà Đường và Nam Hán liên tục cai trị Việt Nam. Đặc biệt, từ năm 905 đến 939, Việt Nam đã có một giai đoạn tự trị ngắn dưới quyền cai trị của các tướng người Việt.`,
        },
        {
          title: '4. Bắc thuộc lần thứ tư (1407 – 1427)',
          content: `Bắc thuộc lần thứ tư bắt đầu khi nhà Minh xâm lược và tái chiếm Việt Nam vào năm 1407, sau khi nhà Hồ sụp đổ. Thời kỳ này kết thúc khi Lê Lợi lãnh đạo cuộc khởi nghĩa Lam Sơn thành công, đuổi quân Minh về nước vào năm 1427, khôi phục độc lập cho Việt Nam.`,
        },
        {
          title: '5. Sự đồng hóa và ảnh hưởng của văn hóa Trung Quốc',
          content: `Trong suốt các thời kỳ Bắc thuộc, các triều đại Trung Quốc liên tục thực hiện chính sách đồng hóa, buộc người Việt phải chịu sự quản lý và văn hóa của Trung Quốc. Người dân Việt Nam phải đóng sưu thuế, cống nạp cho triều đình phương Bắc, và chịu sự bòn rút từ các quan cai trị địa phương. 
    
            Tuy nhiên, một số quan lại Trung Quốc cai trị nghiêm minh, đúng đắn, và đóng góp vào sự phát triển văn hóa Việt Nam. Một trong những nhân vật nổi bật là Sĩ Nhiếp, thái thú nhà Hán từ năm 187-226, được coi là người truyền bá chữ Hán và đạo Khổng vào Việt Nam, đặt nền móng cho sự phát triển của nền nho học tại đây. Ngoài ra, nhiều người Trung Quốc di cư sang Việt Nam, hòa nhập và trở thành một phần của xã hội Việt Nam.`,
        },
        {
          title: '6. Kháng chiến và đấu tranh giành độc lập',
          content: `Mặc dù bị cai trị trong nhiều thế kỷ, người Việt không ngừng nổi dậy để giành lại độc lập. Các cuộc khởi nghĩa nổi tiếng như khởi nghĩa Hai Bà Trưng, khởi nghĩa Lý Bí, và cuộc khởi nghĩa Lam Sơn của Lê Lợi đều là những dấu ấn quan trọng trong lịch sử đấu tranh giành độc lập của dân tộc Việt Nam.`,
        },
      ],
    }
  ],
}
const trieuNgoData: ITotalData = {
  id: ECategory.TRIEU_NGO,
  title: 'Triều Ngô',
  start: 939,
  end: 965,
  image: images.menu_ngo,
  list: [
    {
      id: 1,
      image: images.slide1,  // hình ảnh của Ngô Quyền
      category: ECategory.TRIEU_NGO,
      description: 'Ngô Quyền là người sáng lập triều đại nhà Ngô, nổi tiếng với chiến thắng Bạch Đằng chống quân Nam Hán.',
      title: 'Ngô Quyền',
      body: [
        {
          title: 'Chiến thắng Bạch Đằng',
          image: images.slide1,  // hình ảnh minh họa chiến thắng
          content: 'Năm 938, Ngô Quyền lãnh đạo quân dân đánh bại quân Nam Hán trên sông Bạch Đằng, đánh dấu sự chấm dứt thời kỳ Bắc thuộc.',
        },
        {
          title: 'Lên ngôi vua',
          content: 'Sau chiến thắng, Ngô Quyền lên ngôi vua vào năm 939, mở ra kỷ nguyên độc lập cho nước Việt.'
        }
      ]
    },
    {
      id: 2,
      image: images.slide1,  // hình ảnh của Ngô Xương Ngập
      category: ECategory.TRIEU_NGO,
      description: 'Ngô Xương Ngập là con trưởng của Ngô Quyền, nhưng bị Dương Tam Kha cướp ngôi, phải chạy trốn.',
      title: 'Ngô Xương Ngập',
      body: [
        {
          title: 'Tranh giành quyền lực',
          content: 'Ngô Xương Ngập bị Dương Tam Kha cướp ngôi và buộc phải chạy trốn trong thời gian dài.',
        },
        {
          title: 'Quay trở lại',
          content: 'Ngô Xương Ngập sau đó trở về và cố gắng giành lại quyền lực, nhưng triều đại đã suy yếu dần.'
        }
      ]
    },
    {
      id: 3,
      image: images.slide1,  // hình ảnh của Ngô Xương Văn
      category: ECategory.TRIEU_NGO,
      description: 'Ngô Xương Văn là con trai thứ của Ngô Quyền, người đã lật đổ Dương Tam Kha và khôi phục nhà Ngô.',
      title: 'Ngô Xương Văn',
      body: [
        {
          title: 'Phục hồi nhà Ngô',
          content: 'Ngô Xương Văn lật đổ Dương Tam Kha và khôi phục triều đại nhà Ngô vào năm 950.',
        },
        {
          title: 'Sự suy yếu của triều đại',
          content: 'Nhà Ngô dần suy yếu do xung đột quyền lực giữa các lãnh chúa địa phương, dẫn đến cái chết của Ngô Xương Văn vào năm 965.'
        }
      ]
    }
  ]
};


const trieuDinhData: ITotalData = {
  id: ECategory.TRIEU_DINH,
  title: 'Triều Đinh',
  start: 968,
  end: 980,
  image: images.menu_dinh,
  list: [
    {
      id: 1,
      image: images.slide1,
      category: ECategory.TRIEU_DINH,
      title: 'Triều Đinh: Nền tảng xây dựng quốc gia độc lập',
      description:
        'Triều Đinh, kéo dài từ năm 968 đến năm 980, là một giai đoạn quan trọng trong lịch sử Việt Nam khi đất nước bước vào kỷ nguyên độc lập sau hàng ngàn năm chịu sự đô hộ của phong kiến Trung Quốc. Triều đại này do Đinh Bộ Lĩnh sáng lập, và dù tồn tại trong thời gian ngắn, nó đã đặt nền móng cho sự hình thành một quốc gia độc lập và mạnh mẽ.',
      body: [
        {
          title: 'Bối cảnh lịch sử',
          image: images.menu_dinh,
          content:
            'Sau khi Nhà Ngô suy yếu, đất nước rơi vào tình trạng loạn lạc, được gọi là “loạn 12 sứ quân”. Trong bối cảnh đó, Đinh Bộ Lĩnh, một người xuất thân từ vùng Hoa Lư (nay là Ninh Bình), nổi lên với tài năng quân sự và chính trị. Ông đã dẹp loạn các sứ quân, thống nhất đất nước và xưng đế vào năm 968, đặt quốc hiệu là Đại Cồ Việt, chọn Hoa Lư làm kinh đô.',
        },
        {
          title: 'Thành tựu quan trọng',
          image: images.menu1,
          content: `	1.	Xây dựng quốc gia độc lập: Đinh Bộ Lĩnh đã chấm dứt tình trạng chia cắt và thiết lập một chính quyền trung ương tập quyền, đưa đất nước thoát khỏi sự xâm lược từ phương Bắc, đặc biệt từ nhà Tống.
2.	Xây dựng bộ máy nhà nước: Dưới triều Đinh, hệ thống quan lại và quân đội được tổ chức chặt chẽ. Đinh Bộ Lĩnh xưng là Đinh Tiên Hoàng, tự khẳng định quyền lực tuyệt đối. Ông xây dựng lực lượng quân đội mạnh, chia quân thành “thập đạo” và tạo ra một triều đình có khả năng quản lý toàn bộ quốc gia.
3.	Chính sách ngoại giao khéo léo: Đinh Tiên Hoàng nhận thấy sự đe dọa từ phương Bắc nhưng không trực tiếp đối đầu mà chọn con đường ngoại giao khôn khéo. Ông duy trì mối quan hệ hòa bình với nhà Tống bằng cách xin sắc phong, vừa thể hiện sự độc lập nhưng cũng bảo đảm an ninh cho Đại Cồ Việt.
4.	Thiết lập kinh đô tại Hoa Lư: Việc chọn Hoa Lư làm kinh đô không chỉ mang tính chiến lược về mặt quân sự mà còn giúp ông kiểm soát chặt chẽ các khu vực lân cận. Đây là một vị trí khó tấn công, thuận lợi cho việc phòng thủ đất nước.`,
        },
        {
          title: 'Đinh Tiên Hoàng và sự kế thừa',
          content: `Sau khi Đinh Tiên Hoàng qua đời vào năm 979, triều Đinh bắt đầu suy yếu. Con trai của ông là Đinh Toàn kế vị khi còn rất nhỏ, dẫn đến tình trạng bất ổn trong triều đình. Lợi dụng cơ hội này, nhà Tống chuẩn bị xâm lược Đại Cồ Việt. Tuy nhiên, tướng Lê Hoàn đã lãnh đạo quân đội đánh bại nhà Tống và lên ngôi, mở ra triều đại mới – triều Tiền Lê.`,
        },
        {
          title: 'Ý nghĩa của triều Đinh',
          content: `Dù chỉ tồn tại trong hơn một thập kỷ, triều Đinh đã để lại dấu ấn sâu đậm trong lịch sử Việt Nam. Triều đại này không chỉ mở ra một giai đoạn độc lập sau hàng nghìn năm Bắc thuộc mà còn đặt nền móng cho sự phát triển của nhà nước phong kiến tập quyền. Đinh Tiên Hoàng là người khởi xướng tinh thần tự cường dân tộc, thiết lập nền tảng chính trị và quân sự để bảo vệ nền độc lập của đất nước.
Triều Đinh có thể ngắn ngủi, nhưng vai trò của nó trong việc khởi tạo một quốc gia độc lập, tự chủ, với chính quyền trung ương mạnh mẽ, đã góp phần quan trọng vào việc định hình nền móng của một nước Việt Nam phát triển sau này.`,
        },
      ],
    },
    {
      id: 2,
      image: images.slide2,
      category: ECategory.TRIEU_DINH,
      title: 'Triều Đinh: Khởi nguồn nền độc lập dân tộc',
      description:
        'Triều Đinh (968-980) là triều đại đầu tiên trong lịch sử Việt Nam đánh dấu bước ngoặt quan trọng, khi đất nước chính thức thoát khỏi ách đô hộ phương Bắc và bước vào thời kỳ độc lập tự chủ. Mặc dù tồn tại ngắn ngủi, triều đại này đã đặt nền tảng cho sự phát triển của một nhà nước tập quyền và góp phần củng cố nền độc lập cho dân tộc Việt.',
      body: [
        {
          title: 'Đinh Bộ Lĩnh và thời kỳ loạn 12 sứ quân',
          content:
            'Sau khi Ngô Quyền qua đời, nhà Ngô suy yếu, đất nước rơi vào tình trạng chia cắt, mỗi vùng lãnh thổ do một sứ quân cát cứ. Trong bối cảnh này, Đinh Bộ Lĩnh nổi lên như một anh hùng dân tộc, đánh bại các sứ quân và thống nhất đất nước vào năm 968, mở ra triều đại mới mang tên Đại Cồ Việt.',
        },
        {
          title: 'Các thành tựu của triều Đinh',
          content: `	1.	Thống nhất đất nước và lập quốc: Đinh Tiên Hoàng đã thống nhất đất nước sau nhiều năm chia cắt, đặt nền tảng cho một quốc gia độc lập.
      2.	Xây dựng nhà nước phong kiến tập quyền: Ông xây dựng mô hình nhà nước tập quyền, tổ chức bộ máy chính quyền và quân đội vững mạnh.
      3.	Chính sách ngoại giao khôn khéo: Đinh Tiên Hoàng thực hiện chính sách hòa bình với nhà Tống, duy trì an ninh quốc gia.
      4.	Chọn Hoa Lư làm kinh đô: Đây là vị trí chiến lược giúp ông củng cố quyền lực và phòng thủ đất nước.`,
        },
        {
          title: 'Sự suy yếu và kết thúc của triều Đinh',
          content: `Sau khi Đinh Tiên Hoàng và Đinh Liễn qua đời, triều Đinh rơi vào khủng hoảng. Đinh Toàn kế vị nhưng còn nhỏ, dẫn đến tình trạng bất ổn trong triều chính. Lê Hoàn đã lên ngôi và lập nên triều Tiền Lê sau khi đánh bại quân Tống.`,
        },
        {
          title: 'Ý nghĩa lịch sử của triều Đinh',
          content: `Triều Đinh đã đánh dấu sự mở đầu của thời kỳ độc lập cho Việt Nam. Dù ngắn ngủi, triều đại này đã đặt nền móng cho nhà nước phong kiến tập quyền, củng cố sức mạnh quân sự và giữ vững nền độc lập non trẻ của dân tộc.`,
        },
      ],
    },
  ],
}

const trieuLyData: ITotalData = {
  id: ECategory.TRIEU_LY,
  title: 'Triều Lý',
  start: 1009,
  end: 1225,
  image: images.menu_ly,
  list: [
    {
      id: 3,
      category: ECategory.TRIEU_LY,
      image: images.menu_ly,
      title: 'Triều Lý: Thời kỳ ổn định và phát triển của Việt Nam',
      description:
        'Triều Lý (1009-1225) là một trong những triều đại lâu dài và phát triển nhất trong lịch sử Việt Nam. Đây là giai đoạn mà đất nước đạt được sự ổn định về chính trị, phát triển về văn hóa và mở rộng lãnh thổ. Triều đại này do Lý Công Uẩn sáng lập và được coi là một trong những thời kỳ hưng thịnh nhất của lịch sử dân tộc.',
      body: [
        {
          title: 'Bối cảnh lịch sử',
          content:
            'Sau khi triều Tiền Lê suy yếu, đất nước đứng trước nguy cơ chia cắt và khủng hoảng chính trị. Lý Công Uẩn, một quan chức có tài, đã được nhân dân và triều đình ủng hộ lên ngôi, lập ra triều Lý vào năm 1009. Đây là triều đại mang tính bước ngoặt khi đất nước thoát khỏi giai đoạn rối ren và bắt đầu bước vào thời kỳ phát triển mạnh mẽ.',
        },
        {
          title: 'Thành tựu quan trọng',
          content: `	1.	Thủ đô Thăng Long: Năm 1010, Lý Công Uẩn dời đô từ Hoa Lư về Thăng Long, mở ra một kỷ nguyên mới với thủ đô phát triển thịnh vượng.
      2.	Tôn giáo và văn hóa: Triều Lý coi trọng Phật giáo và xây dựng nhiều công trình tôn giáo lớn như chùa Một Cột, chùa Diên Hựu, góp phần phát triển văn hóa dân tộc.
      3.	Phát triển kinh tế: Nông nghiệp được chú trọng với các biện pháp cải tiến ruộng đất, hệ thống thủy lợi, giúp đất nước trở nên giàu mạnh.
      4.	Mở rộng lãnh thổ: Triều Lý đã đánh dẹp các cuộc nổi loạn và mở rộng lãnh thổ về phía Nam, tạo nền móng cho một quốc gia thống nhất.`,
        },
        {
          title: 'Sự suy yếu và kết thúc của triều Lý',
          content: `Vào cuối thế kỷ 12, triều đình nhà Lý bắt đầu suy yếu do các cuộc tranh giành quyền lực nội bộ, cùng với đó là tình trạng tham nhũng và mất lòng dân. Điều này đã dẫn đến sự suy yếu của triều đình và mở đường cho nhà Trần lên thay thế vào năm 1225.`,
        },
        {
          title: 'Ý nghĩa lịch sử của triều Lý',
          content: `Triều Lý đã tạo ra nền tảng vững chắc cho sự phát triển lâu dài của đất nước. Đây là giai đoạn Việt Nam trở nên hùng mạnh, cả về chính trị, kinh tế lẫn văn hóa. Những thành tựu của triều Lý đã để lại dấu ấn sâu đậm trong lịch sử và là tiền đề cho các triều đại sau như nhà Trần tiếp tục xây dựng và bảo vệ đất nước.`,
        },
      ],
    },
    {
      id: 4,
      image: images.menu_ly,
      category: ECategory.TRIEU_LY,
      title: 'Triều Lý: Giai đoạn phát triển và mở rộng lãnh thổ',
      description:
        'Triều Lý (1009-1225) là thời kỳ phát triển rực rỡ của đất nước Việt Nam, đặc biệt về mặt lãnh thổ và văn hóa. Đây là giai đoạn mà đất nước thoát khỏi thời kỳ phong kiến rối ren và bước vào thời kỳ thống nhất, với nhiều cải cách về hành chính và quân sự.',
      body: [
        {
          title: 'Lý Công Uẩn và sự khởi đầu của triều đại',
          content:
            'Năm 1009, Lý Công Uẩn lên ngôi vua, lập ra nhà Lý sau khi nhà Tiền Lê suy yếu. Ông đã dời đô từ Hoa Lư về Thăng Long, đánh dấu sự thay đổi lớn trong chiến lược phát triển của đất nước. Với việc dời đô, Lý Công Uẩn đã tạo ra một trung tâm kinh tế, văn hóa, và chính trị mới, góp phần thúc đẩy sự phát triển lâu dài của quốc gia.',
        },
        {
          title: 'Những cải cách nổi bật của triều Lý',
          content: `	1.	Dời đô về Thăng Long: Đây là một quyết định mang tầm chiến lược, giúp đất nước phát triển về mọi mặt. Thăng Long trở thành thủ đô hưng thịnh trong suốt hàng thế kỷ sau.
      2.	Phát triển quân đội và hành chính: Triều Lý đã thiết lập hệ thống quản lý hành chính chặt chẽ và tổ chức quân đội mạnh mẽ, giúp bảo vệ đất nước trước các cuộc xâm lược từ bên ngoài.
      3.	Coi trọng văn hóa và giáo dục: Nhiều công trình văn hóa, chùa chiền được xây dựng. Giáo dục được phát triển với việc đào tạo quan lại và phát triển các trường học.
      4.	Mở rộng lãnh thổ: Nhà Lý đã mở rộng lãnh thổ về phía Nam, đánh dấu sự mở rộng quy mô đất nước và phát triển mạnh mẽ về mặt quân sự.`,
        },
        {
          title: 'Sự suy yếu của triều Lý',
          content: `Vào thế kỷ 12, nhà Lý bắt đầu suy yếu do sự tranh giành quyền lực giữa các quan lại và tình trạng lạm dụng quyền hành. Điều này dẫn đến sự khủng hoảng chính trị, quân đội suy yếu, và đất nước rơi vào tình trạng hỗn loạn.`,
        },
        {
          title: 'Ý nghĩa lịch sử của triều Lý',
          content: `Triều Lý đã mở ra một thời kỳ phát triển mạnh mẽ cho đất nước về mọi mặt, từ văn hóa, giáo dục, đến lãnh thổ. Đây cũng là giai đoạn mà nền văn minh Đại Việt bắt đầu định hình rõ ràng, đặt nền móng cho các triều đại sau phát triển.`,
        },
      ],
    },
  ],
}

const trieuTienLeData: ITotalData = {
  id: ECategory.TRIEU_TIEN_LE,
  title: 'Triều Tiền Lê',
  start: 1225,
  end: 1400,
  image: images.menu_tienle,
  list: [
    {
      id: 6,
      image: images.menu_tien_le,  // hình ảnh minh họa cho triều đại Tiền Lê
      category: ECategory.TRIEU_TIEN_LE,
      title: 'Bộ máy Nhà nước và các vị Vua Triều đại Tiền Lê',
      description:
        'Triều đại Tiền Lê (980-1009) là một trong những triều đại ngắn ngủi nhưng có nhiều đóng góp to lớn vào sự phát triển của nhà nước Đại Cồ Việt. Dưới sự trị vì của các vua Lê Đại Hành, Lê Trung Tông, và Lê Long Đĩnh, đất nước đã trải qua các giai đoạn phát triển và khủng hoảng.',
      body: [
        {
          title: 'Lê Đại Hành (Lê Hoàn, 980-1005)',
          content:
            'Lê Hoàn xuất thân từ một gia đình nghèo và đã leo lên vị trí quyền lực thông qua tài năng quân sự và chính trị. Sau khi Đinh Tiên Hoàng bị ám sát, Lê Hoàn đã được Dương Vân Nga trao quyền lực và lên ngôi vua. Trong thời gian trị vì, Lê Hoàn đã đánh bại quân Tống xâm lược vào năm 981 và phát triển đất nước về cả quân sự lẫn kinh tế, với trọng tâm là sản xuất nông nghiệp và thủ công nghiệp.',
        },
        {
          title: 'Lê Trung Tông (Lê Long Việt, 1005)',
          content: `	1. Sau khi vua Lê Đại Hành qua đời, Lê Long Việt (con thứ ba của Lê Đại Hành) lên ngôi với hiệu Lê Trung Tông.
          2. Tuy nhiên, triều đại của ông chỉ kéo dài 3 ngày do bị em trai là Lê Long Đĩnh ám sát. Sự kiện này đã dẫn đến cuộc tranh giành quyền lực khốc liệt trong hoàng tộc.`,
        },
        {
          title: 'Lê Ngọa Triều (Lê Long Đĩnh, 1005 – 1009)',
          content: `	1. Lê Long Đĩnh lên ngôi sau khi ám sát anh trai mình là Lê Trung Tông. Ông là vị vua cuối cùng của triều Tiền Lê.
          2. Triều đại của Lê Long Đĩnh nổi tiếng với những hành vi bạo ngược và lối sống trác táng, khiến cho triều đại Tiền Lê nhanh chóng suy yếu và mất lòng dân.
          3. Sau khi Lê Long Đĩnh qua đời vào năm 1009, triều Tiền Lê kết thúc và nhà Lý bắt đầu với sự lên ngôi của Lý Công Uẩn.`,
        },
        {
          title: 'Ý nghĩa lịch sử của triều Tiền Lê',
          content: `Triều Tiền Lê chỉ tồn tại trong 29 năm với 3 đời vua, nhưng đã có những đóng góp lớn vào việc bảo vệ nền độc lập của Đại Cồ Việt và xây dựng nền tảng cho sự phát triển về sau. Đây cũng là thời kỳ chuyển tiếp quan trọng giữa các triều đại phong kiến lớn của Việt Nam.`,
        },
      ],
    },
    {
      id: 7,
      image: images.menu_dai_co_viet,  // hình ảnh minh họa cho nhà nước Đại Cồ Việt thời Tiền Lê
      category: ECategory.TRIEU_TIEN_LE,
      title: 'Nhà nước Đại Cồ Việt dưới thời Tiền Lê',
      description:
        'Năm 980, Lê Hoàn lên ngôi vua, lập ra triều Tiền Lê. Triều Tiền Lê có những cống hiến to lớn vào sự nghiệp dựng nước và giữ nước với thắng lợi vang dội của cuộc kháng chiến chống Tống (năm 981) và bình định Chăm-pa (năm 982).',
      body: [
        {
          title: 'Bối cảnh lịch sử và triều đại Lê Long Đĩnh',
          content:
            'Cho đến năm 1005, vua Lê Hoàn mất, các con của Lê Hoàn tranh chấp ngôi vua, đem quân đánh lẫn nhau; các hoàng tử hoặc bị giết, hoặc đầu hàng Lê Long Đĩnh. Dưới thời Lê Long Đĩnh (1005 - 1009), Nhà nước Đại Cồ Việt cũng có những bước phát triển nhất định, nhưng do Lê Long Đĩnh sớm đi vào con đường ăn chơi sa đọa nên lòng người chán nản, oán giận. Vì vậy, sau khi Lê Long Đĩnh chết (năm 1009), triều đình đưa Lý Công Uẩn lên làm vua, lập ra triều Lý (1009 - 1225).'
        },
        {
          title: 'Dời đô và triều đại mới',
          content:
            'Năm 1010, vua Lý Công Uẩn quyết định dời đô từ Hoa Lư về thành Đại La và đổi tên là thành Thăng Long. Việc dời đô về Thăng Long phản ánh yêu cầu mới về phát triển nhà nước phong kiến tập quyền và chứng tỏ khả năng, lòng tin, quyết tâm của cả dân tộc trong việc giữ vững nền độc lập. Cùng với tinh thần, ý chí đó, năm 1054, nhà Lý (vua Lý Thánh Tông) đổi tên nước là Đại Việt.'
        },
        {
          title: 'Quốc hiệu Đại Cồ Việt',
          content:
            'Quốc hiệu "Đại Cồ Việt" tồn tại trong lịch sử dân tộc từ năm 968 đến năm 1054, trải qua 3 triều đại: Đinh (968 - 980), Tiền Lê (980 - 1009) và thời kỳ đầu của nhà Lý (1009 - 1054).'
        },
        {
          title: 'Tổ chức bộ máy nhà nước',
          content: `	1. Chính quyền trung ương thời Tiền Lê được giữ nguyên như thời Đinh, vua nắm mọi quyền hành cả dân sự lẫn quân sự; dưới vua là các chức quan văn, võ, hầu hết là những người có công phò tá nhà vua lên ngôi. Vua Lê Hoàn vẫn đóng đô ở Hoa Lư; năm 984, cho xây dựng nhiều cung điện với quy mô to lớn hơn.
          2. Chính quyền địa phương đầu thời Tiền Lê vẫn giữ nguyên 10 đạo như thời Đinh; đến năm 1002, đổi các đạo thành lộ, dưới có phủ, châu, giáp, xã. Sang thời Lý, năm 1010, Lý Công Uẩn chia nước thành các lộ và phủ; dưới phủ là huyện và cuối cùng là hương, giáp; miền núi và vùng xa trung ương thì chia thành châu, trại.`,
        },
        {
          title: 'Tổ chức quân đội',
          content: `	1. Thời Tiền Lê và thời kỳ đầu nhà Lý, việc xây dựng lực lượng quân sự rất được chú trọng, nhằm bảo vệ nền độc lập và chủ quyền quốc gia, dân tộc. Bên cạnh quân đội thường trực của triều đình (thiên tử quân, cấm vệ quân...) được tuyển lựa cẩn thận và tổ chức, huấn luyện chu đáo, còn có quân đội địa phương (dân binh, hương binh) làm nhiệm vụ canh phòng, bảo vệ các lộ, phủ, châu và có thể được chính quyền trung ương điều động bất cứ khi nào cần thiết.
          2. Cùng với lực lượng bộ binh, lực lượng thủy quân cũng được tập trung xây dựng. Thời Tiền Lê đã có những chiến thuyền lớn, được trang bị đầy đủ. Thời Lý, quân đội có nhiều binh chủng phong phú hơn.`,
        },
        {
          title: 'Luật pháp',
          content: `	1. Dưới thời Tiền Lê, nhà vua quan tâm đến việc xây dựng pháp luật và đề cao luật pháp. Năm 1002, vua Lê Đại Hành "định luật lệ"; tuy nhiên, việc xét xử ở thời kỳ này còn khá tùy tiện.
          2. Sang đến thời nhà Lý, năm 1042, Lý Thái Tông cho soạn bộ "Hình thư", đây là bộ luật thành văn đầu tiên của Việt Nam, thể hiện một bước tiến quan trọng trong việc trị nước.`,
        },
        {
          title: 'Kinh tế',
          content: `	1. Nông nghiệp đóng vai trò chủ yếu. Các vua rất chú ý khuyến khích nông nghiệp. Lê Đại Hành là vị vua mở đầu cho lễ tịch điền vào mùa xuân hàng năm, nhằm khuyến khích sản xuất nông nghiệp. Ông cũng là vị vua đầu tiên tổ chức đào sông Nhà Lê, con đường giao thông thủy nội địa đầu tiên của Việt Nam.
          2. Các nghề thủ công dưới thời Tiền Lê và đầu thời Lý như nghề gốm, nghề dệt, nghề mộc, khai mỏ, luyện sắt, đúc đồng, chạm khắc, sơn thếp đều được phát triển mạnh mẽ.`,
        },
        {
          title: 'Văn hóa',
          content:
            'Đạo Phật giữ vai trò lớn trong đời sống xã hội Đại Cồ Việt thời Tiền Lê và thời kỳ đầu nhà Lý. Nhiều nhà vua và quý tộc đã theo đạo Phật, đề cao tư tưởng từ bi, bác ái. Các loại hình văn hóa dân gian và hát tuồng cũng phát triển mạnh mẽ trong thời kỳ này.',
        },
        {
          title: 'Đối ngoại',
          content: `	1. Vua Lê Đại Hành vẫn tỏ ra thần phục nhà Tống, duy trì quan hệ hòa hiếu sau chiến thắng quân Tống năm 981, nhưng triều đình Tiền Lê vẫn luôn giữ tinh thần tự cường và độc lập.
          2. Thời kỳ đầu nhà Lý, quan hệ hòa hiếu với nhà Tống tiếp tục được chăm lo củng cố. Tuy nhiên, quan hệ Việt - Chăm ở phía Nam trở nên căng thẳng, dẫn đến các cuộc chinh phạt của các vua Lý.`,
        },
      ],
    }
  ],
}

const trieuHauLeData: ITotalData = {
  id: ECategory.TRIEU_HAU_LE,
  title: 'Triều Hậu Lê',
  start: 1428,
  end: 1789,
  image: images.menu_haule,
  list: [
    {
      id: 19,
      image: images.menu_hau_le,  // hình ảnh minh họa về triều đại Nhà Hậu Lê
      category: ECategory.LICH_SU,
      title: 'Nhà Hậu Lê: Triều đại thăng trầm của lịch sử Việt Nam',
      description:
        'Nhà Hậu Lê (1428–1789) là triều đại phong kiến do Lê Lợi lập ra, kéo dài gần 360 năm. Triều đại này trải qua hai giai đoạn chính: Lê sơ (1428-1528) và Lê Trung Hưng (1533-1789), với nhiều biến cố lớn trong lịch sử nước Đại Việt.',
      body: [
        {
          title: '1. Giai đoạn Lê sơ (1428–1528)',
          content:
            'Giai đoạn Lê sơ kéo dài 99 năm, bắt đầu từ khi khởi nghĩa Lam Sơn thắng lợi và Lê Lợi lên ngôi vua vào năm 1428. Thời kỳ này là giai đoạn phát triển mạnh mẽ về kinh tế, quân sự, và văn hóa của Đại Việt. Tuy nhiên, đến năm 1527, Mạc Đăng Dung phế truất vua Lê Cung Hoàng, lập ra nhà Mạc, đánh dấu sự kết thúc của giai đoạn Lê sơ.',
        },
        {
          title: '2. Giai đoạn Lê Trung Hưng (1533–1789)',
          content: `Giai đoạn Lê Trung Hưng bắt đầu từ năm 1533 khi tướng Nguyễn Kim tôn phò Lê Duy Ninh, một người thuộc dòng dõi nhà Lê, lên ngôi và phát động kháng chiến chống lại nhà Mạc. Đây là thời kỳ kéo dài hơn 250 năm nhưng phần lớn thời gian, các vua nhà Lê mất thực quyền, chỉ tồn tại trên danh nghĩa, quyền lực thật sự nằm trong tay các chúa Trịnh.
    
            Thời kỳ này còn được gọi là **Nam Bắc triều**, khi nhà Lê và nhà Mạc chia đôi nước Đại Việt. Sau khi nhà Mạc bị đánh bại và phải chạy lên Cao Bằng (1592-1677), quyền lực thực sự thuộc về họ Trịnh ở phía Bắc. Tuy nhiên, họ Nguyễn không thần phục họ Trịnh và ly khai ở phía Nam, dẫn đến cuộc Trịnh Nguyễn phân tranh kéo dài, chia cắt Đại Việt thành hai miền.`,
        },
        {
          title: '3. Nam Bắc triều và Trịnh – Nguyễn phân tranh',
          content: `Thời kỳ Lê Trung Hưng còn chứng kiến sự phân chia nước Đại Việt thành **Nam Bắc triều**. Nhà Mạc kiểm soát miền Bắc, trong khi nhà Lê dưới sự phò tá của họ Trịnh kiểm soát miền Nam. Đến năm 1592, nhà Mạc chính thức bị đánh bại nhưng phải rút lên Cao Bằng tiếp tục tồn tại cho đến năm 1677. Lúc này, quyền lực ở Đại Việt tập trung trong tay họ Trịnh, mặc dù vua Lê vẫn tồn tại nhưng chỉ trên danh nghĩa.
    
            Cuộc tranh giành quyền lực giữa họ Trịnh và họ Nguyễn (Trịnh Nguyễn phân tranh) đã khiến Đại Việt bị chia cắt suốt nhiều thập kỷ, với chúa Trịnh ở miền Bắc và chúa Nguyễn ở miền Nam. Cuộc chiến này kéo dài cho đến khi Nguyễn Huệ, lãnh đạo của phong trào Tây Sơn, tiêu diệt cả họ Trịnh và họ Nguyễn, thống nhất đất nước.`,
        },
        {
          title: '4. Sự sụp đổ của nhà Hậu Lê',
          content:
            'Nhà Hậu Lê chính thức sụp đổ vào năm 1789 khi Lê Chiêu Thống cầu viện nhà Thanh đánh Tây Sơn. Nguyễn Huệ đã nhanh chóng lên ngôi hoàng đế, đánh tan 29 vạn quân Thanh và thống nhất đất nước, chấm dứt sự tồn tại của nhà Hậu Lê.',
        },
      ],
    },
    {
      id: 21,
      image: images.menu_trinh_nguyen,  // hình ảnh minh họa về Trịnh-Nguyễn phân tranh
      category: ECategory.LICH_SU,
      title: 'Trịnh – Nguyễn phân tranh: Cuộc phân chia lãnh thổ và quyền lực trong lịch sử Việt Nam',
      description:
        'Trịnh – Nguyễn phân tranh là giai đoạn lịch sử Việt Nam khi đất nước bị chia cắt thành hai miền, với chế độ "vua Lê chúa Trịnh" ở Đàng Ngoài và chúa Nguyễn cai trị Đàng Trong. Cuộc chiến kéo dài hơn 150 năm từ năm 1627 và kết thúc vào năm 1777, đánh dấu sự đối đầu giữa hai thế lực phong kiến mạnh mẽ.',
      body: [
        {
          title: '1. Bối cảnh lịch sử của Trịnh – Nguyễn phân tranh',
          content: `Cuộc phân tranh giữa họ Trịnh và họ Nguyễn bắt nguồn từ sự chia rẽ trong nội bộ triều đình Hậu Lê sau khi nhà Mạc bị đánh đổ. Cả hai thế lực họ Trịnh và họ Nguyễn ban đầu đều mang khẩu hiệu "phù Lê diệt Mạc" để thu hút lòng dân và cam kết trung thành với triều đình Hậu Lê. Sau khi nhà Mạc suy yếu và sụp đổ, cả hai thế lực đều tuyên bố trung thành với triều Lê, nhưng trên thực tế, họ tự tạo nên những vùng lãnh thổ và quyền lực riêng biệt.`,
        },
        {
          title: '2. Cuộc xung đột chính thức bắt đầu (1627)',
          content: `Cuộc chiến giữa hai thế lực bắt đầu chính thức vào năm 1627 khi Trịnh Tráng, con trai của Trịnh Tùng, đưa quân từ Đàng Ngoài (phía bắc sông Gianh) xuống tấn công Nguyễn Phúc Nguyên, chúa Nguyễn cai trị Đàng Trong (miền Nam). Lý do của cuộc chiến này là do những bất đồng về quyền lực và lãnh thổ, mặc dù cả hai bên đều lấy danh nghĩa là phò Lê trung thành. Đây là sự kiện khởi đầu cho giai đoạn gần 150 năm chia cắt đất nước.`,
        },
        {
          title: '3. Vua Lê chỉ là danh nghĩa',
          content: `Trên danh nghĩa, vua nhà Hậu Lê vẫn là vị vua hợp pháp của cả nước Đại Việt, nhưng thực quyền đã hoàn toàn nằm trong tay các chúa Trịnh ở Đàng Ngoài và chúa Nguyễn ở Đàng Trong. Mặc dù vua Lê tiếp tục trị vì trên lý thuyết, nhưng triều đình Hậu Lê đã trở nên yếu kém và không còn đủ quyền lực để kiểm soát hoặc ngăn chặn cuộc phân tranh giữa hai thế lực.`,
        },
        {
          title: '4. Cuộc chiến tranh kéo dài hơn 150 năm',
          content: `Cuộc chiến tranh giữa Trịnh và Nguyễn kéo dài qua nhiều thế hệ, với hàng chục cuộc tấn công và phản công qua lại giữa hai bên. Tuy nhiên, mặc dù có những trận đánh dữ dội, ranh giới lãnh thổ giữa hai bên hầu như không thay đổi nhiều, với Đàng Trong do chúa Nguyễn cai trị từ sông Gianh trở vào Nam, và Đàng Ngoài dưới sự cai trị của chúa Trịnh từ sông Gianh ra Bắc. Cuộc phân tranh này đã tạo ra sự chia cắt lãnh thổ và quyền lực trong suốt hơn một thế kỷ rưỡi.`,
        },
        {
          title: '5. Kết thúc cuộc phân tranh (1777)',
          content: `Cuộc phân tranh Trịnh – Nguyễn kéo dài cho đến năm 1777, khi phong trào Tây Sơn nổi lên. Chúa Nguyễn cuối cùng đã bị lật đổ vào năm 1777 bởi nghĩa quân Tây Sơn, kết thúc thời kỳ phân tranh giữa hai họ Trịnh và Nguyễn. Sau đó, chúa Trịnh cũng bị Tây Sơn tiêu diệt, chấm dứt sự chia cắt đất nước. Nhà Tây Sơn sau đó thống nhất đất nước trong một thời gian ngắn.`,
        },
        {
          title: '6. Tác động của cuộc phân tranh đối với đất nước',
          content: `Cuộc phân tranh Trịnh – Nguyễn kéo dài đã gây ra sự chia cắt về lãnh thổ và chính trị tại Đại Việt trong gần 150 năm. Mặc dù cả hai thế lực đều tuyên bố trung thành với triều đình Hậu Lê, nhưng sự phân chia quyền lực đã dẫn đến hai vùng đất cai trị hoàn toàn riêng biệt, với các chính sách và cách quản lý khác nhau. Điều này đã tạo ra những hệ quả kinh tế và xã hội sâu sắc, góp phần làm suy yếu đất nước trong bối cảnh đối đầu với các mối đe dọa từ bên ngoài như cuộc xâm lược của phương Tây.`,
        },
        {
          title: '7. Hệ quả chính trị và văn hóa',
          content: `Trong thời kỳ phân tranh, đất nước Đại Việt đã chia cắt thành hai miền, mỗi miền phát triển dưới sự quản lý của hai thế lực khác nhau. Đàng Trong phát triển kinh tế biển, với các hoạt động thương mại quốc tế sôi động, trong khi Đàng Ngoài chủ yếu phát triển dựa trên nền kinh tế nông nghiệp truyền thống. Sự phân chia này cũng tạo ra những khác biệt về văn hóa giữa hai miền, mặc dù vẫn chung một nguồn gốc và lịch sử dân tộc.`,
        },
        {
          title: '8. Lòng dân và sự khát khao thống nhất',
          content: `Mặc dù đất nước bị chia cắt, lòng dân vẫn hướng về sự thống nhất. Những cuộc chiến tranh liên miên giữa hai thế lực khiến người dân phải chịu đựng sự khốn khổ. Khi phong trào Tây Sơn nổi lên với mục tiêu thống nhất đất nước, nhiều người đã ủng hộ phong trào này như một niềm hy vọng cuối cùng để chấm dứt cảnh chiến tranh và chia cắt.`,
        },
      ],
    }

  ],
}

const trieuTranData: ITotalData = {
  id: ECategory.TRIEU_TRAN,
  title: 'Triều Trần',
  start: 1225,
  end: 1400,
  image: images.menu_tran,
  list: [
    {
      id: 8,
      image: images.menu_tran,  // hình ảnh minh họa cho nhà Trần
      category: ECategory.TRIEU_TRAN,
      title: 'Sơ lược về nhà Trần',
      description:
        'Nhà Trần (1226-1400) là một trong những triều đại phong kiến rực rỡ và nổi tiếng nhất trong lịch sử Việt Nam. Triều đại nhà Trần từng cùng nhân dân 3 lần đánh thắng quân Nguyên - Mông. Công lao nổi bật của nhà Trần là xây dựng đất nước, đưa Nho giáo và Đạo giáo vào nước ta, cùng hàng loạt cải cách phát triển kinh tế, văn hóa, quân sự, giáo dục.',
      body: [
        {
          title: 'Nhà Trần ra đời trong hoàn cảnh nào?',
          content:
            'Việc chuyển giao nhà Lý sang nhà Trần là một cuộc chuyển giao quyền lực nhẹ nhàng. Nhà Lý suy yếu, dân tình khốn khó do hạn hán, lũ lụt, trong khi quân xâm lược phương Bắc rình rập. Nhà Lý phải nhờ vào sức mạnh của họ Trần để duy trì đất nước.',
        },
        {
          title: 'Vị vua đầu tiên của nhà Trần là ai?',
          content:
            'Trần Thái Tông (Trần Cảnh) lên ngôi lúc nhỏ và trở thành vị vua anh minh. Ông cải cách, khuyến khích nông dân khai hoang và xây dựng nền tảng chính trị, quân sự vững mạnh. Trần Thái Tông đánh bại quân Mông Cổ năm 1258 và nhường ngôi cho con, lên làm Thượng hoàng.',
        },
        {
          title: 'Tổ chức bộ máy nhà nước thời Trần',
          content: `	1. Nhà Trần tiếp tục mô hình Nhà nước thân dân và đạt đến độ hoàn thiện. Năm 1242, nhà Trần đổi 24 lộ thời Lý ra làm 12 lộ, dưới lộ là phủ, châu, huyện, xã, mỗi cấp đều có quan cai quản.
          2. Nhà Trần lập thêm nhiều cơ quan chuyên trách như Thẩm hình viện, Tam ty viện, Quốc sử viện, Thái y viện. Các chức quan như Tư đồ, Tư mã, Tư không cũng được bổ sung. Thời kỳ này, lực lượng quân đội được xây dựng mạnh mẽ.`,
        },
        {
          title: 'Xã hội thời Trần gồm có những tầng lớp nào?',
          content: `	1. Vương hầu, quý tộc: Tầng lớp có nhiều ruộng đất và đặc quyền trong chính quyền.
          2. Địa chủ: Tầng lớp giàu có với nhiều ruộng đất tư.
          3. Nông dân: Là tầng lớp bị trị và chiếm số đông.
          4. Thợ thủ công, thương nhân: Chiếm tỉ lệ nhỏ nhưng ngày càng phát triển.
          5. Nông nô, nô tì: Tầng lớp thấp kém nhất xã hội, lệ thuộc vào chủ.`,
        },
        {
          title: 'Pháp luật nhà nước dưới thời Trần',
          content: `	1. Thời Trần có hai bộ luật quan trọng: "Quốc Triều thông chế" và "Hoàng Triều đại điển", nhưng đều đã thất truyền. Pháp luật thời này ưu tiên bảo vệ chủ quyền và lợi ích của triều đại, đề cao lễ giáo, và có tính độc lập cao so với pháp luật Trung Hoa.
          2. Pháp luật tập trung vào hình sự với nhiều chế tài nghiêm khắc, đồng thời rất gần gũi với nhân dân.`,
        },
      ],
    },
    {
      id: 9,
      image: images.menu_nguyen_mong,  // hình ảnh minh họa chiến thắng quân Nguyên - Mông
      category: ECategory.TRIEU_TRAN,
      title: 'Quân dân nhà Trần ba lần đánh thắng giặc Nguyên - Mông',
      description:
        'Trong thế kỷ XIII, cả thế giới kinh hoàng trước sự tàn phá của đế chế Mông Cổ. Quân Mông Cổ từng khuấy đảo từ Á sang u, nhưng ba lần xâm lăng Đại Việt đều bị đánh bại dưới sự lãnh đạo của nhà Trần. Chiến thắng cuối cùng trên sông Bạch Đằng năm 1288 đã chấm dứt mộng xâm lược của Hốt Tất Liệt và khẳng định sự độc lập của Đại Việt.',
      body: [
        {
          title: 'Cuộc kháng chiến chống đế quốc Mông Cổ lần thứ nhất (1258)',
          content:
            'Năm 1257, Hốt Tất Liệt sai tướng Ngột Lương Hợp Thai xâm lược Đại Việt. Nhà Trần sử dụng chiến thuật “vườn không nhà trống” để tiêu hao sinh lực địch. Ngày 24/12/1257, quân dân Đại Việt dưới sự chỉ huy của vua Trần Thái Tông đã giành chiến thắng tại Đông Bộ Đầu, đánh bại quân Mông Cổ, buộc chúng phải rút lui.',
        },
        {
          title: 'Cuộc kháng chiến chống quân xâm lược Nguyên - Mông lần thứ hai (1285)',
          content: `	1. Năm 1284, Hốt Tất Liệt sai con trai Thoát Hoan dẫn 50 vạn quân xâm lược Đại Việt, kết hợp với quân Toa Đô từ Chiêm Thành đánh ra Nghệ An.
          2. Quân dân Đại Việt dưới sự chỉ huy của Hưng Đạo Vương Trần Quốc Tuấn đã thực hiện kế “vườn không, nhà trống”, đồng thời tiến hành phản công thắng lợi tại các trận Hàm Tử, Tây Kết, Chương Dương, giải phóng Thăng Long và đánh bại hoàn toàn quân Nguyên vào tháng 6/1285.`,
        },
        {
          title: 'Cuộc kháng chiến chống quân xâm lược Nguyên - Mông lần thứ ba (1287 - 1288)',
          content: `	1. Lần thứ ba, Hốt Tất Liệt huy động 50 vạn quân tấn công Đại Việt. Quân Nguyên chia làm nhiều hướng tiến quân. Dưới sự chỉ huy của Trần Quốc Tuấn, quân dân Đại Việt đánh bại quân Nguyên tại trận Bạch Đằng vào ngày 9/4/1288. Quân ta sử dụng chiến thuật đóng cọc ngầm trên sông, phá tan đoàn thuyền của Ô Mã Nhi và bắt sống nhiều tướng lĩnh giặc.
          2. Thoát Hoan cùng tàn quân tháo chạy về nước, kết thúc cuộc xâm lược lần thứ ba của quân Nguyên - Mông.`,
        },
        {
          title: 'Ý nghĩa lịch sử',
          content: `Chiến thắng ba lần chống quân Nguyên - Mông là minh chứng cho tinh thần đoàn kết và tài thao lược của quân dân Đại Việt dưới triều Trần. Chiến thắng Bạch Đằng đã bảo vệ nền độc lập, tự chủ của Đại Việt trước một trong những đế chế hùng mạnh nhất thế giới lúc bấy giờ.`,
        },
      ],
    }
  ],
}

const trieuHoData: ITotalData = {
  id: ECategory.TRIEU_HO,
  title: 'Triều Hồ',
  start: 1400,
  end: 1407,
  image: images.menu_ho,
  list: [
    {
      id: 10,
      image: images.menu_ho,  // hình ảnh minh họa cho triều đại nhà Hồ
      category: ECategory.TRIEU_HO,
      title: 'Triều đại ngắn ngủi nhất lịch sử phong kiến Việt Nam',
      description:
        'Triều Hồ (1400 - 1407) là một triều đại tồn tại ngắn ngủi trong lịch sử Việt Nam. Hồ Quý Ly lên ngôi lập ra nhà Hồ, đặt quốc hiệu là Đại Ngu. Triều Hồ đã để lại những dấu ấn với các chính sách cải cách về kinh tế, văn hóa, giáo dục và quân sự.',
      body: [
        {
          title: 'Thành lập',
          content:
            'Nhà Hồ được thành lập bởi Hồ Quý Ly, một đại thần nhà Trần. Sau khi được trọng dụng trong triều đình, Hồ Quý Ly dần nắm trọn quyền hành và vào năm 1400, ông truất ngôi vua Trần Thiếu Đế và tự lên ngôi, lập ra triều đại mới với quốc hiệu Đại Ngu.',
        },
        {
          title: 'Chính sách cải cách',
          content: `	1. Chính sách hạn điền, hạn nô: Giới hạn số lượng ruộng đất và nô tì mà các quý tộc được sở hữu nhằm giảm bớt quyền lực của tầng lớp địa chủ.
          2. Phát hành tiền giấy: Đây là một trong những cải cách nổi bật của triều Hồ, nhằm cải thiện nền kinh tế.
          3. Phát triển giáo dục: Đề cao Nho giáo, mở mang trường học và phát triển chữ Nôm.`,
        },
        {
          title: 'Chú trọng quân sự',
          content: `Nhà Hồ rất chú trọng phát triển quân sự với việc xây dựng các công trình phòng thủ như Thành Tây Đô (Thanh Hóa), được UNESCO công nhận là di sản văn hóa thế giới vào năm 2011. Nhà Hồ đầu tư mạnh mẽ vào việc củng cố quốc phòng, nhằm chuẩn bị chống lại các cuộc xâm lược từ phương Bắc.`,
        },
        {
          title: 'Sự suy vong',
          content:
            'Dù có nhiều cải cách, triều Hồ chỉ tồn tại 7 năm. Đến năm 1407, quân Minh từ Trung Quốc xâm lược, Hồ Quý Ly và Hồ Hán Thương bị bắt, triều Hồ sụp đổ, kết thúc một triều đại ngắn ngủi nhưng để lại nhiều dấu ấn trong lịch sử Việt Nam.',
        },
      ],
    },
    {
      id: 11,
      image: images.menu_ho_minh,  // hình ảnh minh họa chiến tranh Đại Ngu - Đại Minh
      category: ECategory.TRIEU_HO,
      title: 'Chiến tranh Đại Ngu - Đại Minh',
      description:
        'Chiến tranh Đại Ngu – Đại Minh, hay còn gọi là Chiến tranh Hồ – Minh, là cuộc chiến giữa nhà Hồ nước Đại Ngu và nhà Minh Trung Quốc dưới triều Minh Thành Tổ, kéo dài từ tháng 4 năm 1406 đến tháng 6 năm 1407. Cuộc chiến này kết thúc với sự thất bại hoàn toàn của quân đội nhà Hồ và đánh dấu sự sụp đổ của triều đại này.',
      body: [
        {
          title: 'Bối cảnh lịch sử',
          content:
            'Năm 1400, Hồ Quý Ly buộc vua nhà Trần phải nhường ngôi và lập ra nhà Hồ, đổi quốc hiệu thành Đại Ngu. Sau khi lên ngôi, Hồ Quý Ly thực hiện nhiều cải cách về tiền giấy, quân sự, hành chính và chuyển kinh đô từ Thăng Long về Thanh Hóa. Tuy nhiên, nhà Hồ gặp nhiều sức ép từ phía nhà Minh khi họ đưa ra những đòi hỏi về người, lương thực, của cải và đất đai. Hồ Quý Ly cố gắng đáp ứng những yêu sách này một cách tối thiểu để bảo toàn Đại Ngu.'
        },
        {
          title: 'Chiến sự mở màn và cuộc tấn công của nhà Minh',
          content: `	1. Tháng 4 năm 1406, nhà Minh lấy cớ đưa Trần Thiêm Bình về nước để phục vị và tiến hành xâm lược Đại Ngu. Mặc dù quân đội nhà Hồ đã cố gắng chống trả, đội quân tiên phong của nhà Minh bị đánh bại ở ải Lãnh Kinh, nhưng quân Đại Ngu tổn thất lớn với cái chết của bốn tướng chỉ huy.
          2. Tháng 11 năm 1406, Minh Thành Tổ huy động 215.000 quân (nói phao lên là 80 vạn) chia thành hai hướng tấn công Đại Ngu. Đạo quân do Trương Phụ chỉ huy tấn công vào cửa ải Pha Lũy, trong khi đạo quân của Mộc Thạnh tấn công vào cửa ải Phú Lệnh. Nhà Hồ không phòng thủ ở biên giới mà rút về phòng thủ ở phía Nam sông Hồng.`,
        },
        {
          title: 'Các trận đánh quyết định và thất bại của nhà Hồ',
          content: `	1. Quân Minh, với sự trợ giúp của các quan ngụy đầu hàng, đánh bại quân Đại Ngu trong các trận Mộc Hoàn và Đa Bang, chiếm được Đông Đô. Sau đó, quân Minh tiếp tục tấn công và đánh bại quân chủ lực nhà Hồ tại trận Hàm Tử.
          2. Tháng 6 năm 1407, quân Minh bắt sống Hồ Quý Ly và Hồ Hán Thương khi họ rút về Thanh Hóa, đánh dấu sự sụp đổ hoàn toàn của nhà Hồ và Đại Ngu. Nhà Minh áp đặt ách đô hộ lên Đại Ngu, biến nước Việt thành một tỉnh của Trung Quốc.`,
        },
        {
          title: 'Hậu quả và phản ứng từ sử quan',
          content: `Sau khi nhà Hồ sụp đổ, nhà Minh chính thức đặt ách đô hộ lên Đại Ngu và nước này mất lãnh thổ đã chiếm của Chiêm Thành trước đó. Tuy nhiên, các sử quan Việt Nam khi biên soạn "Đại Việt sử ký toàn thư" vào thời Lê sơ và thời Lê - Trịnh đã không công nhận nhà Hồ là triều đại chính thống, nhằm phủ nhận tính hợp pháp của nhà Minh trên lãnh thổ Việt Nam. Thay vào đó, họ coi nhà Hậu Trần (1407-1414) là triều đại chính thống và xem cuộc khởi nghĩa của Lê Lợi năm 1418 là sự tiếp nối hợp pháp của Đại Việt, khẳng định nhà Minh chỉ là lực lượng chiếm đóng tạm thời.`,
        },
        {
          title: 'Bối cảnh dẫn đến chiến tranh',
          content: `	1. Cuối thế kỷ XIV, nhà Trần suy yếu nghiêm trọng, không thể ngăn cản các cuộc tấn công của Chiêm Thành và các cuộc khởi nghĩa trong nước. Đồng thời, nhà Minh ở Trung Quốc dưới triều Chu Nguyên Chương ngày càng trở nên hùng mạnh sau khi đánh bại người Mông Cổ, và có ý định xâm chiếm Đại Việt từ sau thất bại của vua Trần Duệ Tông tại Chiêm Thành năm 1377.
          2. Trong thời gian này, nhà Minh liên tục yêu sách đòi cống nạp lương thực, vật phẩm, phụ nữ và voi chiến từ nhà Trần, và nhà Trần đã phải đáp ứng phần lớn các yêu sách này. Sau khi Hồ Quý Ly lập ra nhà Hồ năm 1400, ông phải đối mặt với những yêu sách khắt khe hơn từ nhà Minh. Nhà Hồ cũng cố gắng mở rộng lãnh thổ về phía Nam nhưng gặp khó khăn ở chiến trường Chiêm Thành.`,
        },
        {
          title: 'Diễn biến chi tiết cuộc chiến',
          content: `	1. Nhà Minh quyết định xâm lược Đại Ngu vào năm 1406 với hai đạo quân lớn. Đạo quân do Trương Phụ chỉ huy tấn công ải Pha Lũy, trong khi đạo quân của Mộc Thạnh đánh cửa ải Phú Lệnh. Quân nhà Hồ rút lui về phòng thủ ở phía Nam sông Hồng và thực hiện chiến lược "vườn không nhà trống" để làm khó cho quân Minh.
          2. Dù có chiến lược phòng thủ và tích trữ lương thực, quân nhà Hồ liên tiếp thất bại trong các trận chiến quan trọng như bãi Thiên Mạc, Mộc Hoàn và đặc biệt là trận Đa Bang, khiến cho quân Minh chiếm được thành Đa Bang và Đông Đô. Sau trận chiến tại Hàm Tử, quân chủ lực của nhà Hồ tan rã và Hồ Quý Ly, Hồ Hán Thương bị bắt sống vào tháng 6 năm 1407.`,
        },
      ],
    }
  ],
}

const trieuMacData: ITotalData = {
  id: ECategory.TRIEU_MAC,
  title: 'Triều Mạc',
  start: 1527,
  end: 1592,
  image: images.menu_mac,
  list: [
    {
      id: 12,
      image: images.menu_mac,  // hình ảnh minh họa cho triều đại nhà Mạc
      category: ECategory.TRIEU_MAC,
      title: 'Đôi nét về triều đại nhà Mạc',
      description:
        'Nhà Mạc tồn tại 66 năm (1527-1593) trong lịch sử phong kiến Việt Nam nhưng đã để lại nhiều dấu ấn và chứng tích lịch sử quan trọng, đặc biệt là sự phát triển của vùng duyên hải Bắc Bộ. Nhà Mạc nổi bật với các cải cách về kinh tế, giáo dục, quân sự và tổ chức xã hội. Kinh đô Dương Kinh (Hải Phòng) là một trong những minh chứng cho tầm nhìn của nhà Mạc.',
      body: [
        {
          title: 'Thành lập và thời kỳ tồn tại ngắn ngủi',
          content:
            'Nhà Mạc được thành lập bởi Thái tổ Mạc Đăng Dung, sinh năm 1483 tại làng Cổ Trai. Ông xuất thân từ một gia đình nghèo nhưng nhờ võ nghệ và sức khỏe, ông được vào quân túc vệ và lập nhiều công trạng dưới triều Lê. Năm 1527, Mạc Đăng Dung buộc Lê Cung Hoàng nhường ngôi, lập nên nhà Mạc và lấy Dương Kinh làm trung tâm. Sau đó, ông lui về ở ẩn, nhường ngôi cho con là Mạc Đăng Doanh. Dù tồn tại chỉ trong 66 năm, nhà Mạc đã để lại những dấu ấn sâu sắc trong lịch sử.',
        },
        {
          title: 'Thời kỳ thịnh trị của nhà Mạc',
          content: `	1. Dưới thời Mạc Đăng Doanh, con trưởng của Mạc Đăng Dung, nhà Mạc bước vào thời kỳ thịnh trị nhất. Ông đã phò giúp vua anh là Mạc Phúc Hải và vua cháu Mạc Phúc Nguyên, và sau này được Mạc Kính Điển phò tá. Nhà Mạc đã ổn định được trật tự, phát triển kinh tế và chính trị, giúp cuộc sống nhân dân trở nên ổn định và thịnh vượng.
          2. Tuy nhiên, vào năm 1593, quân Lê-Trịnh chiếm lại Thăng Long và tấn công vào các cứ điểm của nhà Mạc, khiến Mạc Phúc Tư cùng hai thân vương tự vẫn. Sau đó, nhà Mạc chính thức mất quyền cai trị, các tôn thất nhà Mạc phải lưu lạc và tự đổi tên để tránh bị truy sát.`,
        },
        {
          title: 'Những thành tựu và tranh cãi',
          content: `	1. Dù nhà Mạc bị coi là "ngụy triều" trong sử sách của nhà Lê và nhà Nguyễn, nhưng trên thực tế, nhà Mạc đã đạt được nhiều thành tựu về kinh tế, xã hội, và giáo dục. Nhà Mạc đã tổ chức 21 kỳ thi hội, tuyển chọn được 460 tiến sĩ và 10 trạng nguyên. Đặc biệt, thời kỳ nhà Mạc có nữ tiến sĩ duy nhất trong lịch sử phong kiến Việt Nam là Nguyễn Thị Duệ.
          2. Về kinh tế, nhà Mạc đã thực hiện các cải cách như khai khẩn ruộng đất, cấp đất cho nông dân, binh lính, phát triển các ngành nghề thủ công, xây dựng chợ và hải cảng, khuyến khích thương mại. Nhà Mạc còn mở xưởng đóng tàu và phát triển giao thương với các nước ngoài, góp phần thúc đẩy nền kinh tế đất nước.`,
        },
        {
          title: 'Những hạn chế và suy vong',
          content: `Sau khi vua Mạc Hiến Tông qua đời, các vị vua kế vị đều là ấu chúa, điều này dẫn đến sự thiếu minh quân lãnh đạo và sự suy yếu của triều đình. Cuối cùng, nhà Mạc không đủ sức chống lại áp lực từ bên ngoài, đặc biệt là từ quân Lê-Trịnh. Đến năm 1593, sau nhiều cuộc chiến với quân Lê-Trịnh, nhà Mạc mất quyền cai trị và phải lui về Cao Bằng, nơi họ cố gắng duy trì thế lực cho đến khi hoàn toàn sụp đổ vào năm 1677.`,
        },
        {
          title: 'Đóng góp của nhà Mạc trong lịch sử Việt Nam',
          content: `	1. Mặc dù thời gian tồn tại ngắn, nhà Mạc đã có nhiều đóng góp quan trọng trong lĩnh vực giáo dục, phát triển kinh tế, và bảo vệ lãnh thổ. Nhà Mạc đã trọng dụng nhiều nhân tài như trạng Trình Nguyễn Bỉnh Khiêm, người có kiến thức uyên thâm và đóng góp lớn cho nền văn hóa nước ta.
          2. Về mặt pháp lý, nhiều sử gia thời Lê-Trịnh và nhà Nguyễn đã ra sức hạ thấp nhà Mạc, nhưng các cải cách và thành tựu của nhà Mạc đã khẳng định vị trí quan trọng của triều đại này trong lịch sử Việt Nam.`,
        },
      ],
    },
    {
      id: 13,
      image: images.menu_le_mac,  // hình ảnh minh họa cho cuộc chiến tranh Lê - Mạc
      category: ECategory.TRIEU_MAC,
      title: 'Chiến tranh Lê - Mạc',
      description:
        'Nội chiến Lê – Mạc (1533–1677) là cuộc nội chiến giữa nhà Mạc và nhà Hậu Lê trong lịch sử Việt Nam. Cuộc chiến diễn ra trong hai giai đoạn chính: thời kỳ Nam – Bắc triều (1533–1592) khi nhà Mạc chiếm đóng Bắc Bộ, và thời kỳ tàn dư nhà Mạc cát cứ tại Cao Bằng (1593–1677). Cuộc chiến này kéo dài hơn 140 năm và để lại nhiều dấu ấn trong lịch sử nước ta.',
      body: [
        {
          title: 'Hoàn cảnh dẫn đến cuộc chiến',
          content:
            'Nhà Hậu Lê suy yếu nghiêm trọng từ thời Lê Uy Mục và Lê Tương Dực, triều đình rơi vào cảnh loạn lạc, các cuộc khởi nghĩa nông dân nổ ra khắp nơi. Trong bối cảnh này, võ tướng Mạc Đăng Dung dẹp loạn, nắm quyền triều Lê và cuối cùng phế truất Lê Cung Hoàng, lập nên nhà Mạc vào năm 1527. Tuy nhiên, sự lên ngôi của nhà Mạc vấp phải nhiều phản đối, dẫn đến cuộc chiến tranh Lê – Mạc kéo dài hàng thập kỷ.',
        },
        {
          title: 'Nguyễn Kim và sự khôi phục nhà Lê',
          content: `	1. Một võ tướng trung thành với nhà Lê là Nguyễn Kim không chịu thần phục nhà Mạc và chạy vào Thanh Hóa, sang Ai Lao (Lào) để tập hợp lực lượng chống nhà Mạc. Năm 1533, ông tìm được Lê Duy Ninh, con của vua Lê Chiêu Tông, và đưa lên ngôi vua, lấy niên hiệu Lê Trang Tông, bắt đầu khôi phục nhà Hậu Lê.
          2. Từ năm 1539, Nguyễn Kim liên tục tấn công chiếm lại lãnh thổ từ tay nhà Mạc, giành lại được một phần Thanh Hóa và Nghệ An. Đến năm 1543, Lê Trang Tông chiếm lại Tây Đô và lập ra Nam triều, chính thức bắt đầu cuộc chiến Nam – Bắc triều với nhà Mạc.`,
        },
        {
          title: 'Thời kỳ Nam – Bắc triều (1533–1592)',
          content: `	1. Giai đoạn này diễn ra cuộc đối đầu giữa Nam triều (nhà Hậu Lê) và Bắc triều (nhà Mạc). Nhà Mạc kiểm soát Bắc Bộ, trong khi nhà Hậu Lê kiểm soát miền Trung và Nam Bộ. Cả hai bên đều cố gắng giành quyền kiểm soát toàn bộ Đại Việt.
          2. Sau khi Nguyễn Kim bị đầu độc chết năm 1545, con rể của ông là Trịnh Kiểm nắm quyền và tiếp tục cuộc chiến. Các trận chiến ác liệt diễn ra liên tục trong những năm tiếp theo. Đến năm 1592, quân Lê-Trịnh chiếm được Thăng Long, kết thúc thời kỳ Nam – Bắc triều, nhà Mạc mất hoàn toàn quyền kiểm soát Bắc Bộ và rút lên Cao Bằng.`,
        },
        {
          title: 'Thời kỳ tàn dư nhà Mạc cát cứ tại Cao Bằng (1593–1677)',
          content: `Sau khi mất Thăng Long, nhà Mạc rút lên Cao Bằng và tiếp tục cát cứ tại đây trong gần 80 năm. Dưới sự bảo trợ của nhà Minh, nhà Mạc cố gắng duy trì sự tồn tại ở vùng núi phía Bắc nhưng không thể khôi phục lại quyền lực. Đến năm 1677, nhà Lê-Trịnh tấn công vào Cao Bằng, đánh bại tàn dư nhà Mạc, kết thúc cuộc nội chiến kéo dài hơn 140 năm.`,
        },
        {
          title: 'Kết quả và ý nghĩa lịch sử',
          content: `	1. Chiến tranh Lê – Mạc kết thúc với chiến thắng của nhà Hậu Lê và sự sụp đổ hoàn toàn của nhà Mạc. Cuộc chiến kéo dài hơn một thế kỷ đã gây ra nhiều đau thương, tàn phá lớn về kinh tế và xã hội cho đất nước.
          2. Tuy nhiên, cuộc chiến này cũng đánh dấu sự thay đổi về mặt quyền lực, khi nhà Lê trở lại vị trí cai trị, đồng thời quyền lực của dòng họ Trịnh ngày càng được củng cố, mở đường cho sự thống trị của chúa Trịnh trong thời kỳ Lê Trung Hưng.`,
        },
      ],
    }
  ],
}

const trieuNguyenData: ITotalData = {
  id: ECategory.TRIEU_NGUYEN,
  title: 'Triều Nguyễn',
  start: 1802,
  end: 1945,
  image: images.menu_nguyen,
  list: [
    {
      id: 18,
      image: images.menu_nha_nguyen,  // hình ảnh minh họa về triều đại nhà Nguyễn
      category: ECategory.TRIEU_NGUYEN,
      title: 'Triều đại Nhà Nguyễn: Thăng trầm và dấu ấn lịch sử',
      description:
        'Nhà Nguyễn (1802-1945) là triều đại phong kiến cuối cùng trong lịch sử Việt Nam, tồn tại 143 năm. Triều đại này trải qua nhiều thăng trầm, từ giai đoạn độc lập tự chủ đến thời kỳ bị thực dân Pháp xâm lược và đô hộ.',
      body: [
        {
          title: '1. Nhà Nguyễn được thành lập vào năm nào?',
          content:
            'Nhà Nguyễn chính thức được thành lập vào năm 1802, sau khi vua Gia Long (Nguyễn Phúc Ánh) lên ngôi, trở thành triều đại phong kiến cuối cùng của Việt Nam. Lúc đầu, nhà Nguyễn sử dụng quốc hiệu Nam Việt, sau đổi thành Việt Nam, và cuối cùng là Đại Nam vào thời vua Minh Mạng.',
        },
        {
          title: '2. Nhà Nguyễn ra đời trong hoàn cảnh nào?',
          content: `Triều đại nhà Nguyễn ra đời sau thời kỳ chiến tranh Trịnh - Nguyễn phân tranh và sau khi nhà Tây Sơn suy yếu. Nguyễn Ánh, hậu duệ của chúa Nguyễn ở Đàng Trong, đã lợi dụng cái chết của vua Quang Trung và huy động lực lượng, cùng sự giúp đỡ của quân Xiêm La và Pháp, để đánh bại nhà Tây Sơn vào năm 1802, từ đó thống nhất lãnh thổ và lập nên triều Nguyễn. Nguyễn Ánh lên ngôi với niên hiệu Gia Long và định đô ở Phú Xuân (Huế).`,
        },
        {
          title: '3. Hai giai đoạn chính của lịch sử nhà Nguyễn',
          content: `Nhà Nguyễn trải qua hai giai đoạn chính:
            1. **Giai đoạn độc lập tự chủ (1802–1858)**: Thời kỳ đầu của nhà Nguyễn, các vua Gia Long, Minh Mạng, Thiệu Trị và Tự Đức đã cố gắng củng cố đất nước trên nền tảng Nho giáo. Tuy nhiên, sự trì trệ và không cải cách kịp thời đã khiến đất nước dần suy yếu, dẫn đến cuộc xâm lược của Pháp.
            2. **Giai đoạn bị Pháp xâm lược và đô hộ (1858–1945)**: Bắt đầu từ cuộc tấn công của thủy quân Pháp vào Đà Nẵng năm 1858 và kết thúc với sự thoái vị của vua Bảo Đại năm 1945. Thời kỳ này, thực dân Pháp cai trị đất nước, trong khi các vua Nguyễn chỉ giữ ngai vàng nhưng không có thực quyền.`,
        },
        {
          title: '4. Nhà Nguyễn có bao nhiêu đời vua?',
          content: `Nhà Nguyễn có tổng cộng 13 đời vua, kéo dài từ khi vua Gia Long lên ngôi năm 1802 cho đến khi vua Bảo Đại thoái vị năm 1945. Các vua nổi tiếng trong triều Nguyễn bao gồm Gia Long, Minh Mạng, Thiệu Trị và Tự Đức.`,
        },
        {
          title: '5. Những thăng trầm của nhà Nguyễn',
          content: `Nhà Nguyễn đã trải qua nhiều thăng trầm trong lịch sử. Giai đoạn đầu là thời kỳ độc lập tự chủ, với các nỗ lực xây dựng đất nước. Tuy nhiên, sự thiếu cải cách và suy thoái của triều đình đã mở đường cho sự xâm lược của thực dân Pháp. Nhà Nguyễn đầu hàng trước sự xâm lược này, dẫn đến thời kỳ thuộc địa và sự mất nước. Cuộc cách mạng tháng Tám năm 1945 đã chấm dứt triều đại nhà Nguyễn, mở ra kỷ nguyên mới cho đất nước.`,
        },
        {
          title: '6. Đóng góp và đánh giá về triều Nguyễn',
          content: `Mặc dù có những ý kiến trái chiều về triều Nguyễn, bao gồm việc cầu viện ngoại bang để giành lấy quyền lực, nhà Nguyễn cũng đã có những đóng góp quan trọng, như thống nhất đất nước, mở rộng lãnh thổ và phát triển kinh tế. Tuy nhiên, việc thiếu cải cách kịp thời và sự yếu kém trong đối phó với ngoại xâm đã dẫn đến sự sụp đổ của triều đại.`,
        },
      ],
    }
  ],
}

const trieuTaySonData: ITotalData = {
  id: ECategory.TRIEU_TAY_SON,
  title: 'Triều Tây Sơn',
  start: 1778,
  end: 1802,
  image: images.menu_tayson,
  list: [
    {
      id: 14,
      image: images.menu_quang_trung,  // hình ảnh minh họa cho Quang Trung - Nguyễn Huệ
      category: ECategory.TRIEU_TAY_SON,
      title: 'Những cống hiến và công trạng của Quang Trung - Nguyễn Huệ',
      description:
        'Nguyễn Huệ - Quang Trung là một trong những anh hùng dân tộc vĩ đại nhất trong lịch sử Việt Nam. Ông đã có những cống hiến to lớn trong sự nghiệp bảo vệ độc lập dân tộc, chống ngoại xâm và xây dựng đất nước. Những chiến công hiển hách của ông mãi là niềm tự hào của dân tộc Việt Nam.',
      body: [
        {
          title: '1. Cùng Nguyễn Nhạc dựng cờ khởi nghĩa',
          content:
            'Nguyễn Huệ cùng hai anh em Nguyễn Nhạc và Nguyễn Lữ được gọi là Tây Sơn tam kiệt, lãnh đạo cuộc khởi nghĩa Tây Sơn từ năm 1771. Nguyễn Huệ đã thể hiện tài năng quân sự vượt trội trong các trận chiến quan trọng từ Quảng Ngãi đến Bình Thuận. Dưới sự lãnh đạo của Nguyễn Nhạc và sự hỗ trợ của Nguyễn Huệ, quân Tây Sơn đã giải phóng Gia Định vào năm 1783 và bắt đầu kiểm soát vùng Nam Trung Bộ.',
        },
        {
          title: '2. Lãnh đạo thắng lợi hai cuộc kháng chiến chống Xiêm và chống Thanh',
          content: `	1. Trong cuộc kháng chiến chống Xiêm năm 1784-1785, Nguyễn Huệ đã bày mưu chặn đánh 5 vạn quân Xiêm tại trận Rạch Gầm - Xoài Mút, tiêu diệt gần như toàn bộ lực lượng địch chỉ trong một ngày. Đây là chiến thắng chống ngoại xâm đầu tiên trên vùng đất cực nam của đất nước.
          2. Năm 1788-1789, dưới sự cầu viện của Lê Chiêu Thống, quân Thanh xâm lược nước ta với 29 vạn quân. Quang Trung Nguyễn Huệ đã chỉ huy cuộc hành quân thần tốc ra Bắc, mở cuộc tiến công vào đêm giao thừa và đánh bại quân Thanh trong trận Ngọc Hồi - Đống Đa vào mồng 5 Tết, giải phóng kinh thành Thăng Long và giữ vững nền độc lập quốc gia.`,
        },
        {
          title: '3. Chấm dứt tình trạng phân liệt Đàng Trong - Đàng ngoài, đặt cơ sở khôi phục thống nhất quốc gia',
          content: `	1. Sau khi lật đổ chúa Nguyễn ở Đàng Trong và đánh bại quân Xiêm, Nguyễn Huệ tiếp tục tiến quân ra Bắc, đánh lui quân Trịnh, giải phóng toàn bộ Đàng Ngoài. Chỉ trong vòng 10 ngày, quân Tây Sơn đã đánh tan quân Trịnh và chiếm Thăng Long.
          2. Nguyễn Huệ đã lật đổ chính quyền chúa Nguyễn và chúa Trịnh, chấm dứt tình trạng phân liệt kéo dài hơn hai thế kỷ, đặt cơ sở cho việc thống nhất đất nước.`,
        },
        {
          title: '4. Sáng lập một vương triều Tây Sơn tiến bộ',
          content: `Năm 1788, sau khi lên ngôi hoàng đế, Quang Trung bắt đầu công cuộc cải cách và xây dựng đất nước. Ông thiết lập bộ máy hành chính chặt chẽ, thực hiện các cải cách về kinh tế, xã hội và giáo dục. Quang Trung cũng đặc biệt quan tâm đến quân đội, xây dựng lực lượng quân sự mạnh mẽ với bộ binh, tượng binh, pháo binh và thủy binh.
          Dưới triều đại của Quang Trung, nhiều chính sách khuyến nông, khuyến học và phát triển văn hóa đã được ban hành, đặt nền móng cho sự phát triển bền vững của đất nước. Mặc dù thời gian tại vị ngắn ngủi, Quang Trung đã để lại dấu ấn mạnh mẽ trong lịch sử dân tộc.`,
        },
        {
          title: '5. Chiến thắng oai hùng trong các trận đánh vĩ đại',
          content: `	1. Quang Trung đã ghi dấu ấn qua các chiến thắng oai hùng trước quân Xiêm trong trận Rạch Gầm - Xoài Mút và quân Thanh trong trận Ngọc Hồi - Đống Đa. Ông được ca ngợi vì sự thần tốc, táo bạo và chiến thuật quân sự xuất sắc, trở thành một trong những thiên tài quân sự của Việt Nam.
          2. Nguyễn Huệ chưa từng thất bại trong bất kỳ trận chiến nào trong suốt sự nghiệp quân sự của mình. Những chiến công lừng lẫy của ông đã ghi vào lịch sử dân tộc những trang sử vàng chói lọi.`,
        },
      ],
    },
    {
      id: 15,
      image: images.menu_tay_son_quan_doi,  // hình ảnh minh họa cho quân đội Tây Sơn
      category: ECategory.TRIEU_TAY_SON,
      title: 'Triều Tây Sơn và các chính sách xây dựng quân đội',
      description:
        'Dù chỉ tồn tại gần 3 thập kỷ nhưng quân đội Tây Sơn dưới thời Quang Trung - Nguyễn Huệ là lực lượng quân sự hùng mạnh nhất trong lịch sử phong kiến Việt Nam. Với những chính sách xây dựng quân đội đặc sắc, đặc biệt là thủy quân, triều đại Tây Sơn đã đánh bại nhiều cuộc xâm lược và đóng vai trò quan trọng trong việc thống nhất đất nước.',
      body: [
        {
          title: '1. Quân đội Tây Sơn dưới thời Quang Trung - Nguyễn Huệ',
          content:
            'Triều Tây Sơn (1778–1802) được thành lập bởi ba anh em Nguyễn Nhạc, Nguyễn Lữ và Nguyễn Huệ. Dưới sự lãnh đạo của Nguyễn Huệ, lực lượng quân sự của Tây Sơn, đặc biệt là thủy quân, đã phát triển thành một đội quân hùng mạnh. Tây Sơn đã mở rộng lãnh thổ và đánh bại hai cuộc xâm lược của Xiêm và nhà Thanh nhờ chiến thuật quân sự sắc bén và quân đội được tổ chức chặt chẽ.',
        },
        {
          title: '2. Sự phát triển của quân đội Tây Sơn',
          content: `	1. Quân đội Tây Sơn bắt đầu từ lực lượng nghĩa quân nông dân và phát triển mạnh mẽ dưới sự chỉ đạo của Nguyễn Huệ. Từ năm 1771, quân Tây Sơn chỉ có khoảng 3.000 người nhưng đến khi đánh bại quân Thanh năm 1789, quân số đã vượt trên 10 vạn quân. Quân đội Tây Sơn được tổ chức thành các đạo quân như trung quân, tiền quân, hậu quân, tả quân và hữu quân, chia theo đội, cơ, đạo và doanh.
          2. Về chức năng, quân đội Tây Sơn bao gồm bộ binh, pháo binh, kỵ binh, tượng binh và thủy quân. Các lực lượng này được trang bị hiện đại với súng hỏa mai, súng đại bác, hỏa hổ, cùng với hàng trăm voi chiến.`,
        },
        {
          title: '3. Sức mạnh của thủy quân và pháo binh',
          content: `Thủy quân Tây Sơn là một trong những lực lượng hùng mạnh nhất trong lịch sử quân sự Việt Nam, sở hữu nhiều chiến hạm và đại pháo khiến các nước phương Tây thời đó phải kinh ngạc. Trong các trận đánh lớn, pháo binh Tây Sơn luôn yểm trợ hiệu quả cho bộ binh và thủy quân, giúp quân đội Tây Sơn có khả năng cơ động nhanh chóng trên chiến trường.
          Các sĩ quan Pháp từng theo phò Nguyễn Ánh đã thừa nhận tính năng vượt trội của đại pháo và hỏa pháo Tây Sơn trong các trận chiến. Nhiều trận đánh lớn dưới sự chỉ huy của Nguyễn Huệ luôn có pháo binh yểm trợ, đảm bảo thắng lợi cho quân đội Tây Sơn.`,
        },
        {
          title: '4. Chiến thắng vĩ đại trong các trận đánh lớn',
          content: `Nguyễn Huệ đã lãnh đạo quân đội Tây Sơn đánh bại hai cuộc xâm lược lớn của quân Xiêm và quân Thanh. Năm 1785, trong trận Rạch Gầm - Xoài Mút, quân Tây Sơn đã tiêu diệt gần như toàn bộ 5 vạn quân Xiêm chỉ trong một ngày. Năm 1789, với lực lượng khoảng 10 vạn quân, Nguyễn Huệ đã đập tan 29 vạn quân Thanh trong trận Ngọc Hồi - Đống Đa, giữ vững nền độc lập dân tộc.`,
        },
        {
          title: '5. Đóng góp của các tướng lĩnh tài ba',
          content: `	1. Dưới thời Quang Trung, triều Tây Sơn đã thu hút và trọng dụng nhiều tướng lĩnh tài ba như Võ Văn Dũng, Ngô Thì Nhậm, Ngô Văn Sở, La Sơn Phu Tử Nguyễn Thiếp... Chính nhờ sự hỗ trợ của những nhân tài này mà Nguyễn Huệ đã có thể tổ chức các chiến dịch quân sự thần tốc và giành được nhiều chiến thắng oanh liệt.
          2. Sự phối hợp giữa các tướng lĩnh tài ba và chiến thuật quân sự sáng tạo của Nguyễn Huệ đã giúp quân Tây Sơn trở thành một lực lượng quân sự hùng mạnh, luôn giành thắng lợi trong mọi trận chiến.`,
        },
        {
          title: '6. Sự sụp đổ của triều đại Tây Sơn',
          content: `Dù sở hữu sức mạnh quân sự vượt trội, triều đại Tây Sơn đã nhanh chóng sụp đổ sau khi Hoàng đế Quang Trung qua đời năm 1792. Người kế vị ông là Nguyễn Quang Toản không thể tiếp tục duy trì sức mạnh quân đội, khiến nhà Tây Sơn thất bại trước nhà Nguyễn vào năm 1802. Tuy nhiên, những thành tựu quân sự và chiến thắng vĩ đại của triều Tây Sơn vẫn còn là niềm tự hào lớn trong lịch sử Việt Nam.`,
        },
      ],
    }
  ],
}

const phapThuocData: ITotalData = {
  id: ECategory.PHAP_THUOC,
  title: 'Pháp thuộc',
  start: 1858,
  end: 1945,
  image: images.menu_phapthuoc,
  list: [
    {
      id: 16,
      image: images.menu_phap_thuoc,  // hình ảnh minh họa cho giai đoạn Pháp thuộc
      category: ECategory.PHAP_THUOC,
      title: 'Pháp thuộc: Giai đoạn thuộc địa hóa Việt Nam và Đông Dương',
      description:
        'Pháp thuộc là một giai đoạn trong lịch sử Việt Nam kéo dài từ năm 1867 hoặc 1884, khi Pháp bắt đầu thôn tính Việt Nam, cho đến khi Pháp chính thức mất quyền cai trị vào năm 1945. Thời kỳ này chứng kiến quá trình thuộc địa hóa của Pháp, chia cắt Việt Nam thành ba xứ riêng biệt và kéo dài đến khi chiến tranh Đông Dương kết thúc.',
      body: [
        {
          title: '1. Khởi đầu thời kỳ Pháp thuộc',
          content:
            'Thời kỳ Pháp thuộc được bắt đầu vào năm 1867, khi Nam Kỳ Lục tỉnh bị nhà Nguyễn cắt nhượng cho Pháp sau nhiều thất bại trong các cuộc chiến chống Pháp xâm lược. Đây là lãnh thổ đầu tiên của Việt Nam mà Pháp chiếm được, mở ra quá trình thôn tính toàn bộ Đông Dương. Nhiều tài liệu khác lại cho rằng thời kỳ này bắt đầu từ năm 1884, khi triều đình Huế ký Hòa ước Giáp Thân, chính thức thừa nhận quyền bảo hộ của Pháp trên toàn lãnh thổ Việt Nam.',
        },
        {
          title: '2. Quá trình thuộc địa hóa Đông Dương',
          content: `	1. Sau khi chiếm được Nam Kỳ, Pháp tiếp tục thôn tính các vùng khác của Việt Nam và Lào, Campuchia để hình thành Liên bang Đông Dương. Việt Nam bị chia cắt thành 3 xứ: Nam Kỳ trở thành xứ thuộc địa, trong khi Bắc Kỳ và Trung Kỳ là hai xứ bảo hộ với các cơ cấu hành chính riêng biệt.
          2. Ngoài việc cai trị Việt Nam, Pháp còn thôn tính Campuchia và Lào, đặt cả hai quốc gia này dưới sự bảo hộ của Pháp, tạo thành một khu vực thuộc địa rộng lớn ở Đông Nam Á.`,
        },
        {
          title: '3. Tình trạng mất chủ quyền của Việt Nam',
          content: `	1. Trong suốt thời kỳ Pháp thuộc, Việt Nam không còn quyền tự chủ, với nền hành chính và quân đội hoàn toàn nằm dưới sự kiểm soát của Pháp. Các cơ quan chính quyền Việt Nam chỉ giữ vai trò tượng trưng và phải tuân theo mệnh lệnh từ chính quyền thực dân.
          2. Các phong trào đấu tranh đòi độc lập đã bùng nổ, từ phong trào Cần Vương cuối thế kỷ 19, đến các cuộc khởi nghĩa của Phan Bội Châu, Phan Chu Trinh, và phong trào Đông Du, nhưng đều bị Pháp đàn áp.`,
        },
        {
          title: '4. Sự trở lại của Pháp sau Thế chiến II và chiến tranh Đông Dương',
          content: `Sau khi bị Nhật chiếm đóng trong Thế chiến II, Pháp đã mất quyền cai trị Đông Dương vào năm 1945. Tuy nhiên, tháng 9/1945, Pháp đem quân trở lại Việt Nam và cố gắng tái lập quyền cai trị. Dù thừa nhận Việt Nam là một nước tự do trong Liên bang Đông Dương thuộc Liên hiệp Pháp, nhưng chiến tranh Đông Dương vẫn bùng nổ. Cuộc chiến kéo dài 9 năm và kết thúc với thất bại của Pháp tại trận Điện Biên Phủ năm 1954.`,
        },
        {
          title: '5. Kết thúc thời kỳ Pháp thuộc',
          content: `Sau khi thua trận Điện Biên Phủ, Pháp buộc phải ký Hiệp định Genève năm 1954, chấm dứt thời kỳ cai trị của Pháp ở Việt Nam. Pháp cũng phải công nhận nền độc lập của Lào và Campuchia. Sự sụp đổ của chế độ thuộc địa Pháp đã góp phần vào sự suy tàn của các đế quốc thực dân trên toàn thế giới, đặc biệt là trong thập niên 1950 và 1960.`,
        },
      ],
    },
    {
      id: 17,
      image: images.menu_ho_chi_minh,  // hình ảnh minh họa về Hồ Chí Minh
      category: ECategory.PHAP_THUOC,
      title: 'Hồ Chí Minh: Nhà cách mạng và lãnh tụ vĩ đại của Việt Nam',
      description:
        'Hồ Chí Minh (1890–1969), tên khai sinh Nguyễn Sinh Cung, là người sáng lập Đảng Cộng sản Việt Nam, Chủ tịch nước Việt Nam Dân chủ Cộng hòa, và nhà lãnh đạo phong trào độc lập Việt Minh. Ông đã lãnh đạo cách mạng, đọc Tuyên ngôn Độc lập, và giữ vai trò quan trọng trong cuộc đấu tranh giải phóng dân tộc.',
      body: [
        {
          title: '1. Quá trình hoạt động cách mạng trước khi nắm quyền',
          content:
            'Hồ Chí Minh, tên khai sinh Nguyễn Sinh Cung, đã trải qua nhiều quốc gia và châu lục trong hành trình tìm đường cứu nước. Ông được cho là đã sử dụng từ 50 đến 200 bí danh trong quá trình hoạt động cách mạng. Với tư tưởng Marx–Lenin, Hồ Chí Minh đã cống hiến toàn bộ cuộc đời mình cho sự nghiệp đấu tranh giành độc lập cho Việt Nam và các dân tộc bị áp bức khác.',
        },
        {
          title: '2. Lãnh đạo Cách mạng Tháng Tám và thành lập nước Việt Nam Dân chủ Cộng hòa',
          content: `Ngày 19 tháng 8 năm 1945, dưới sự lãnh đạo của Hồ Chí Minh và Việt Minh, cuộc Cách mạng Tháng Tám bùng nổ thành công, lật đổ ách thống trị của Pháp và Nhật tại Việt Nam. Ngày 2 tháng 9 năm 1945, Hồ Chí Minh đọc bản Tuyên ngôn Độc lập tại quảng trường Ba Đình, chính thức thành lập nước Việt Nam Dân chủ Cộng hòa. Sau cuộc tổng tuyển cử năm 1946, ông trở thành Chủ tịch nước đầu tiên của Việt Nam.`,
        },
        {
          title: '3. Vai trò lãnh đạo trong chiến tranh Đông Dương và chiến tranh Việt Nam',
          content: `Trong suốt quá trình diễn ra chiến tranh Đông Dương và chiến tranh Việt Nam, Hồ Chí Minh là nhân vật trung tâm lãnh đạo cuộc kháng chiến chống Pháp và sau đó là chống Mỹ. Ông đã gắn bó với phong trào cách mạng giải phóng dân tộc và là nguồn động viên tinh thần lớn lao cho Mặt trận Dân tộc Giải phóng miền Nam Việt Nam trong cuộc đấu tranh giành độc lập.`,
        },
        {
          title: '4. Qua đời và di sản để lại',
          content: `Hồ Chí Minh giảm dần hoạt động chính trị từ năm 1965 vì lý do sức khỏe và qua đời vào ngày 2 tháng 9 năm 1969. Sau khi Việt Nam thống nhất năm 1975, thành phố Sài Gòn được đổi tên thành Thành phố Hồ Chí Minh để vinh danh ông. Hồ Chí Minh không chỉ là nhà cách mạng và lãnh đạo, mà còn là nhà văn, nhà thơ và nhà báo, với nhiều tác phẩm văn học bằng tiếng Việt, tiếng Hán và tiếng Pháp.`,
        },
        {
          title: '5. Tác phẩm và tư tưởng',
          content: `Ngoài hoạt động chính trị, Hồ Chí Minh còn là nhà văn, nhà thơ và nhà báo với nhiều tác phẩm nổi tiếng như "Nhật ký trong tù" và "Bản án chế độ thực dân Pháp". Những tác phẩm này đã phản ánh tinh thần đấu tranh kiên cường vì độc lập dân tộc và quyền tự do của con người. Tư tưởng Hồ Chí Minh, với nội dung chủ yếu là giải phóng dân tộc, độc lập, tự do và hạnh phúc, đã trở thành di sản to lớn của cách mạng Việt Nam.`,
        },
      ],
    }
  ],
}

const hienDaiData: ITotalData = {
  id: ECategory.HIEN_DAI,
  title: 'Hiện đại',
  start: 1945,
  end: 2021,
  image: images.menu_hiendai,
  list: [],
}

export const totalData: IObjectTotalData = {
  [ECategory.BAC_THUOC]: bacThuocData,
  [ECategory.TRIEU_NGO]: trieuNgoData,
  [ECategory.TRIEU_DINH]: trieuDinhData,
  [ECategory.TRIEU_LY]: trieuLyData,
  [ECategory.TRIEU_TIEN_LE]: trieuTienLeData,
  [ECategory.TRIEU_HAU_LE]: trieuHauLeData,
  [ECategory.TRIEU_TRAN]: trieuTranData,
  [ECategory.TRIEU_HO]: trieuHoData,
  [ECategory.TRIEU_MAC]: trieuMacData,
  [ECategory.TRIEU_NGUYEN]: trieuNguyenData,
  [ECategory.TRIEU_TAY_SON]: trieuTaySonData,
  [ECategory.PHAP_THUOC]: phapThuocData,
  [ECategory.HIEN_DAI]: hienDaiData,
}

export const allPosts = [...trieuDinhData.list, ...trieuLyData.list]
