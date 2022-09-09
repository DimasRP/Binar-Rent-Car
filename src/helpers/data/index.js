import { FiAward, FiClock, FiTag, FiThumbsUp } from "react-icons/fi";

const roles = {
  admin: "Admin",
  customer: "Customer",
};

const ourServicesData = [
  {
    title: "Sewa Mobil dengan Supir di Bali 12 Jam",
  },
  {
    title: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
  },
  {
    title: "Sewa Mobil Jangka Panjang Bulanan",
  },
  {
    title: "Gratis Antar - Jemput Mobil di Bandara",
  },
  {
    title: "Layanan Airport Transfer / Drop In Out",
  },
];

const whyUsData = [
  {
    icon: <FiThumbsUp className="stroke-2" />,
    iconBackgroundColor: "bg-warning",
    title: "Mobil Lengkap",
    content:
      "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    icon: <FiTag className="stroke-2" />,
    iconBackgroundColor: "bg-danger",
    title: "Harga Murah",
    content:
      "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },
  {
    icon: <FiClock className="stroke-2" />,
    iconBackgroundColor: "bg-dark-blue-04",
    title: "Layanan 24 Jam",
    content:
      "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    icon: <FiAward className="stroke-2" />,
    iconBackgroundColor: "bg-lime-green-04",
    title: "Sopir Profesional",
    content:
      "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];

const testimonialsData = [
  {
    id: "1",
    photo: "assets/images/avatar-1.png",
    stars: 5,
    name: "John Dee",
    age: 32,
    place: "Bromo",
    review:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
  },
  {
    id: "2",
    photo: "assets/images/avatar-1.png",
    stars: 5,
    name: "John Dee",
    age: 32,
    place: "Bromo",
    review:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
  },
  {
    id: "3",
    photo: "assets/images/avatar-1.png",
    stars: 5,
    name: "John Dee",
    age: 32,
    place: "Bromo",
    review:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
  },
];

const faqData = [
  {
    id: 1,
    title: "Apa saja syarat yang dibutuhkan?",
    content:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
  },
  {
    id: 2,
    title: "Berapa hari minimal sewa mobil lepas kunci?",
    content:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
  },
  {
    id: 3,
    title: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
    content:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
  },
  {
    id: 4,
    title: "Apakah Ada biaya antar-jemput?",
    content:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
  },
  {
    id: 5,
    title: "Bagaimana jika terjadi kecelakaan?",
    content:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
  },
];

const carCategoryOptions = [
  {
    label: "Pilih Kapasitas Mobil",
    value: null,
    disabled: true,
  },
  {
    label: "Semua",
    value: "",
    disabled: false,
  },
  {
    label: "2 - 4 orang",
    value: "2 - 4 orang",
    disabled: false,
  },
  {
    label: "4 - 6 orang",
    value: "4 - 6 orang",
    disabled: false,
  },
  {
    label: "6 - 8 orang",
    value: "6 - 8 orang",
    disabled: false,
  },
];

const carPriceOptions = [
  {
    label: "Pilih Harga Sewa Per Hari",
    value: false,
    disabled: true,
  },
  {
    label: "Semua",
    value: "",
    disabled: false,
  },
  {
    label: "< Rp 400.000",
    value: "< Rp 400.000",
    disabled: false,
  },
  {
    label: "Rp 400.000 - Rp 600.000",
    value: "Rp 400.000 - Rp 600.000",
    disabled: false,
  },
  {
    label: "> Rp 600.000",
    value: "> Rp 600.000",
    disabled: false,
  },
];

const carStatusOptions = [
  {
    label: "Pilih Status Mobil",
    value: "N/A",
    disabled: true,
  },
  {
    label: "Semua",
    value: "",
    disabled: false,
  },
  {
    label: "Tersedia",
    value: true,
    disabled: false,
  },
  {
    label: "Disewakan",
    value: false,
    disabled: false,
  },
];

export {
  ourServicesData,
  whyUsData,
  testimonialsData,
  faqData,
  carCategoryOptions,
  carPriceOptions,
  carStatusOptions,
  roles,
};
