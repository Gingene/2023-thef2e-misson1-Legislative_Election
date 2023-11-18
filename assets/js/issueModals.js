import picIssue1 from "../images/webp/image5.webp";
import picIssue2 from "../images/webp/image6.webp";
import picIssue3 from "../images/webp/image9.webp";
import fb from "../icons/facebook.svg";
import ig from "../icons/instagram.svg";
import line from "../icons/line.svg";
import twitter from "../icons/twitter.svg";

const issueModalsList = [
  {
    id: 1,
    title: "為毛孩子謀福利！推動寵物醫療保障方案",
    content: [
      {
        subtitle: "設立寵物醫療基金",
        content: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用",
      },
      {
        subtitle: "提供醫療補助",
        content:
          "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力",
      },
      {
        subtitle: "合作動物醫院",
        content: "目前已有和超過 200 家動物醫院進行初步的合作討論",
      },
    ],
    imgUrl: picIssue1,
  },
  {
    id: 2,
    title: "打造休閒天堂！推廣寵物休閒與娛樂場所",
    content: [
      {
        subtitle: "設立寵物醫療基金",
        content: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用",
      },
      {
        subtitle: "提供醫療補助",
        content:
          "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力",
      },
      {
        subtitle: "合作動物醫院",
        content: "目前已有和超過 200 家動物醫院進行初步的合作討論",
      },
    ],
    imgUrl: picIssue2,
  },
  {
    id: 3,
    title: "推廣寵物飼養教育，讓愛更加專業",
    content: [
      {
        subtitle: "設立寵物醫療基金",
        content: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用",
      },
      {
        subtitle: "提供醫療補助",
        content:
          "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力",
      },
      {
        subtitle: "合作動物醫院",
        content: "目前已有和超過 200 家動物醫院進行初步的合作討論",
      },
    ],
    imgUrl: picIssue3,
  },
];

export default function renderIssueModals() {
  const fragment = document.createDocumentFragment();
  issueModalsList.forEach((item, index) => {
    const div = document.createElement("div");
    let div2 = "";
    for (let innerContent of item.content) {
      const subTitle = `<h5 class="fs-5 fw-bold mb-m">${innerContent.subtitle}</h5>`;
      const subContent = `<p class="mb-1m">${innerContent.content}</p>`;
      div2 += subTitle;
      div2 += subContent;
    }
    div.innerHTML = `
      <div
          class="modal fade"
          id="issue${item.id}Modal"
          tabindex="-1"
          aria-labelledby="issue${item.id}ModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-f2e my-1m">
            <div class="modal-content bg-white">
              <div class="modal-header border-0 px-md-3 pt-1 pb-m py-lg-1m">
                <h5
                  class="modal-title text-text-main fw-bold fs-2"
                  id="issue${item.id}ModalLabel"
                >
                    政策議題
                </h5>
                <button
                  type="button"
                  class="border-0 bg-white p-0"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span
                    class="material-symbols-outlined text-text-main event-icon"
                  >
                    cancel
                  </span>
                </button>
              </div>
              <div
                class="modal-body d-flex flex-column flex-lg-row flex-lg-row px-md-3 pb-md-3 pt-m"
              >
                <div class="col-lg-5 p-0 me-lg-2">
                  <img
                    class="img-fluid w-100 rounded-4m mb-1"
                    src="${item.imgUrl}"
                    alt="issue1"
                  />
                  <h4 class="text-text-main fs-ns">
                    ${item.title}
                  </h4>
                  <ul class="navbar-nav flex-row align-items-center">
                    <li class="nav-item text-text-main me-1">分享</li>
                    <li class="nav-item me-1">
                      <a class="nav-link" href="#">
                        <img src="${fb}" alt="facebook" />
                      </a>
                    </li>
                    <li class="nav-item me-1">
                      <a class="nav-link" href="#">
                        <img
                          src="${ig}"
                          alt="instagram"
                        />
                      </a>
                    </li>
                    <li class="nav-item me-1">
                      <a class="nav-link" href="#">
                        <img src="${line}" alt="line" />
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <img src="${twitter}" alt="twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-7 flex-grow-1">
                  <h4 class="text-main fw-bold fs-2 lh-sm mb-2">
                      ${item.title}
                  </h4>
                  <div class="text-text-main mb-6">
                      ${div2}
                  </div>
                  <div class="p-1 bg-bg-event rounded-3l">
                    <h5 class="fw-bold">更多活動</h5>
                    <div class="d-flex">
                      <div
                        class="modal-event-width me-1"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#issue${
                          issueModalsList[(index + 1) % 3].id
                        }Modal"
                      >
                        <img
                          class="img-fluid event-modal-side-img rounded-3 object-fit-cover flex-shrink-0 mb-l"
                          src="${issueModalsList[(index + 1) % 3].imgUrl}"
                          alt="issue${issueModalsList[(index + 1) % 3].id}"
                        />
                        <h4 class="text-text-main fw-bold fs-6 lh-sm mb-m">
                          ${issueModalsList[(index + 1) % 3].title}
                        </h4>
                      </div>
                      <div
                        class="modal-event-width"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#issue${
                          issueModalsList[(index + 2) % 3].id
                        }Modal"
                      >
                        <img
                          class="img-fluid event-modal-side-img rounded-3 object-fit-cover flex-shrink-0 mb-l"
                          src="${issueModalsList[(index + 2) % 3].imgUrl}"
                          alt="issue${issueModalsList[(index + 1) % 3].id}"
                        />
                        <h4 class="text-text-main fw-bold fs-6 lh-sm mb-m">
                          ${issueModalsList[(index + 2) % 3].title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    fragment.append(div);
  });
  modals.append(fragment);
}
