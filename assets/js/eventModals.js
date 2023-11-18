import event1 from "../images/webp/event1.webp";
import event2 from "../images/webp/event2.webp";
import event3 from "../images/webp/event3.webp";
import fb from "../icons/facebook.svg";
import ig from "../icons/instagram.svg";
import line from "../icons/line.svg";
import twitter from "../icons/twitter.svg";

const eventModalsList = [
  {
    id: 1,
    title: "參與台北寵物論壇，爭取貓咪友善環境",
    content:
      "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
    timestamp: "2023/12/26",
    imgUrl: event1,
  },
  {
    id: 2,
    title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
    content:
      "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！",
    timestamp: "2023/12/24",
    imgUrl: event2,
  },
  {
    id: 3,
    title: "收容所模特兒大比拼！",
    content:
      "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
    timestamp: "2023/12/20",
    imgUrl: event3,
  },
];

const modals = document.querySelector("#modals");

export default function renderEventModals() {
  const fragment = document.createDocumentFragment();
  eventModalsList.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div
        class="modal fade"
        id="event${item.id}Modal"
        tabindex="-1"
        aria-labelledby="event${item.id}ModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-f2e my-1m">
          <div class="modal-content bg-white">
            <div class="modal-header border-0 px-md-3 pt-1 pb-m py-lg-1m">
              <h5
                class="modal-title text-text-main fw-bold fs-2"
                id="event${item.id}ModalLabel"
              >
                最新活動
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
              <div class="p-0 me-lg-2">
                <img
                  class="img-fluid event-modal-img rounded-4m mb-1"
                  src="${item.imgUrl}"
                  alt="event1"
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
              <div class="flex-grow-1">
                <h4 class="text-main fw-bold fs-2 lh-sm mb-m">
                    ${item.title}
                </h4>
                <time class="d-block text-text-sub fs-ns pb-m mb-2"
                  >${item.timestamp}</time
                >
                <p class="text-text-main  mb-6">
                    ${item.content}
                </p>
                <div class="p-1 bg-bg-event rounded-3l">
                  <h5 class="fw-bold">更多活動</h5>
                  <div class="d-flex">
                    <div
                      class="modal-event-width me-1"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#event${
                        eventModalsList[(index + 1) % 3].id
                      }Modal"
                    >
                      <img
                        class="img-fluid event-modal-side-img rounded-3 object-fit-cover flex-shrink-0 mb-l"
                        src="${eventModalsList[(index + 1) % 3].imgUrl}"
                        alt="event${eventModalsList[(index + 1) % 3].id}"
                      />
                      <h4 class="text-text-main fw-bold fs-6 lh-sm mb-m">
                        ${eventModalsList[(index + 1) % 3].title}
                      </h4>
                    </div>
                    <div
                      class="modal-event-width"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#event${
                        eventModalsList[(index + 2) % 3].id
                      }Modal"
                    >
                      <img
                        class="img-fluid event-modal-side-img rounded-3 object-fit-cover flex-shrink-0 mb-l"
                        src="${eventModalsList[(index + 2) % 3].imgUrl}"
                        alt="event${eventModalsList[(index + 1) % 3].id}"
                      />
                      <h4 class="text-text-main fw-bold fs-6 lh-sm mb-m">
                        ${eventModalsList[(index + 2) % 3].title}
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
