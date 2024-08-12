<template>
  <div class="background">
    <div class="dialog">
      <div class="dialog-header">
        <div class="room-name">1 King Classic City View</div>
        <div class="close" @click="handleCloseForm">
          <i class="fas fa-times"></i>
        </div>
      </div>

      <div class="dialog-content">
        <div class="room-image">
          <img
            src="https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-8359432378-4x3?wid=540&fit=constrain"
            alt=""
          />
        </div>

        <div class="img-caption">Enjoy our spacious King Bed guest room</div>

        <hr />

        <div class="room-attributes">
          <span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="false"
              focusable="false"
              role="img"
              aria-label="Max occupancy"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.89953 3.60852C8.89953 5.31645 7.61091 6.71703 5.99953 6.71703C4.38815 6.71703 3.09953 5.31646 3.09953 3.60852C3.09953 1.90058 4.38814 0.5 5.99953 0.5C7.6109 0.5 8.89953 1.90057 8.89953 3.60852ZM10.4934 10.4502C10.5091 10.5923 10.4991 10.746 10.4396 10.9056C10.3076 11.2603 9.97849 11.4793 9.52807 11.4793H2.46998C2.01951 11.4793 1.69048 11.2599 1.55891 10.9049C1.49983 10.7455 1.48995 10.592 1.50573 10.45C1.50984 10.4181 1.51068 10.4115 1.50974 10.4201C1.67994 8.85573 2.66565 7.57382 4.16703 7.15213C4.2963 7.11582 4.43475 7.13303 4.5512 7.19989C4.85271 7.37302 5.50017 7.51487 5.98952 7.5251C6.49811 7.51489 7.14621 7.37276 7.44832 7.19966C7.5647 7.13298 7.703 7.11586 7.83213 7.15214C9.33148 7.5734 10.3169 8.85245 10.489 10.4164C10.49 10.4237 10.4913 10.4334 10.4934 10.4502Z"
                fill="#555555"
              ></path>
              <mask
                id="mask0"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="1"
                y="0"
                width="10"
                height="12"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.89953 3.60852C8.89953 5.31645 7.61091 6.71703 5.99953 6.71703C4.38815 6.71703 3.09953 5.31646 3.09953 3.60852C3.09953 1.90058 4.38814 0.5 5.99953 0.5C7.6109 0.5 8.89953 1.90057 8.89953 3.60852ZM10.4934 10.4502C10.5091 10.5923 10.4991 10.746 10.4396 10.9056C10.3076 11.2603 9.97849 11.4793 9.52807 11.4793H2.46998C2.01951 11.4793 1.69048 11.2599 1.55891 10.9049C1.49983 10.7455 1.48995 10.592 1.50573 10.45C1.50984 10.4181 1.51068 10.4115 1.50974 10.4201C1.67994 8.85573 2.66565 7.57382 4.16703 7.15213C4.2963 7.11582 4.43475 7.13303 4.5512 7.19989C4.85271 7.37302 5.50017 7.51487 5.98952 7.5251C6.49811 7.51489 7.14621 7.37276 7.44832 7.19966C7.5647 7.13298 7.703 7.11586 7.83213 7.15214C9.33148 7.5734 10.3169 8.85245 10.489 10.4164C10.49 10.4237 10.4913 10.4334 10.4934 10.4502Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask0)"></g>
            </svg>
            <label>3</label>
          </span>

          <span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="false"
              focusable="false"
              role="img"
              aria-label="Room Size"
            >
              <path
                d="M4.0625 7.3125H2.64062C2.51367 7.3125 2.4375 7.23633 2.4375 7.10938V6.70312C2.4375 6.60156 2.51367 6.5 2.64062 6.5H4.0625V4.875H2.64062C2.51367 4.875 2.4375 4.79883 2.4375 4.67188V4.26562C2.4375 4.16406 2.51367 4.0625 2.64062 4.0625H4.0625V2.4375H2.64062C2.51367 2.4375 2.4375 2.36133 2.4375 2.23438V1.82812C2.4375 1.72656 2.51367 1.625 2.64062 1.625H4.0625V0.8125C4.0625 0.380859 3.68164 0 3.25 0H0.8125C0.355469 0 0 0.380859 0 0.8125V12.1875C0 12.2637 0 12.3398 0.0253906 12.3906L4.0625 8.37891V7.3125ZM12.1875 8.9375H11.375V10.3594C11.375 10.4863 11.2734 10.5625 11.1719 10.5625H10.7656C10.6387 10.5625 10.5625 10.4863 10.5625 10.3594V8.9375H8.9375V10.3594C8.9375 10.4863 8.83594 10.5625 8.73438 10.5625H8.32812C8.20117 10.5625 8.125 10.4863 8.125 10.3594V8.9375H6.5V10.3594C6.5 10.4863 6.39844 10.5625 6.29688 10.5625H5.89062C5.76367 10.5625 5.6875 10.4863 5.6875 10.3594V8.9375H4.62109L0.609375 12.9746C0.660156 13 0.736328 13 0.8125 13H12.1875C12.6191 13 13 12.6445 13 12.1875V9.75C13 9.31836 12.6191 8.9375 12.1875 8.9375Z"
                fill="#555555"
              ></path>
            </svg>
            <label style="font-weight: 500">43 sqmt</label>
          </span>
        </div>

        <div class="room-description">
          43 Sqm Balcony Separate Bath And Walk In Shower
        </div>

        <div class="room-amenities-container">
          <h2 class="room-amenities-header">
            Room Amenities
          </h2>
          <!---->
          <div class="room-amenities-collection">
            <!---->
            <h3>Beds</h3>
            <ul>
              <li class="ng-star-inserted">
                1 King Bed
              </li>
              <!---->
            </ul>
          </div>
          <div
           
            class="room-amenities-collection ng-star-inserted"
            style=""
          >
            <!---->
            <h3>Room Classification</h3>
            <ul>
              <li class="ng-star-inserted">
                Classic
              </li>
              <!---->
            </ul>
          </div>
          <div
           
            class="room-amenities-collection ng-star-inserted"
            style=""
          >
            <!---->
            <h3>View</h3>
            <ul>
              <li class="ng-star-inserted">
                City View
              </li>
              <!---->
            </ul>
          </div>
          <div
           
            class="room-amenities-collection ng-star-inserted"
            style=""
          >
            <!---->
            <h3>Outdoor Items</h3>
            <ul>
              <li class="ng-star-inserted">
                Balcony
              </li>
              <!---->
            </ul>
          </div>
          <div
           
            class="room-amenities-collection ng-star-inserted"
            style=""
          >
            <!---->
            <h3>Smoking Policy</h3>
            <ul>
              <li class="ng-star-inserted">
                Non-Smoking
              </li>
              <!---->
            </ul>
          </div>
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["closeForm"])

const handleCloseForm = () => {
    emit('closeForm');
}
</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css");
.background {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.dialog {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 712px;
  height: 100vh;
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  overflow-y: scroll;

  .dialog-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .room-name {
      font-size: 24px;
    }
    .close {
    cursor: pointer;
      i {
        font-size: 24px;
      }
    }
  }

  .dialog-content {
    .room-image {
      width: 100%;
      height: 450px;
      background-color: brown;
      border-radius: 4px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .img-caption {
      margin-top: 10px;
      min-height: 20px;
      font-size: 14px;
      font-family: Graphik-Regular;
      line-height: 19px;
      color: #555;
    }

    hr {
      margin-top: 10px;
      margin-bottom: 1rem;
      width: 100%;
    }

    .room-attributes {
      display: flex;
      gap: 20px;
      label {
        margin-left: 5px;
        color: #555;
      }
    }

    .room-description {
      margin-top: 30px;
      text-align: start;
      font-size: 14px;
      color: #555;
    }

    .room-amenities-container{
        font-family: Graphik-Regular;
        column-count: 2;

        .room-amenities-header {
            font-weight: 600;
            font-size: 18px;
            margin-bottom: 0;
            margin-top: 20px;
            column-span: all;
            color: #000;
        }

        h3{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #555;
            margin-bottom: 0;
            margin-top: 20px;
            display: inline-block;
        }

        ul{
            break-before: avoid-column;
            break-inside: avoid-column;
            margin-bottom: 0;
            margin-top: 15px;
            padding-inline-start: 20px;

            li{
                font-weight: 400;
                font-size: 14px;
                line-height: 19px;
                color: #555;
            }
        }
    }
    
  }
}
</style>
