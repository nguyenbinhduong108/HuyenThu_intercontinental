<template>
  <div id="box"></div>
  <header id="header">
    <div class="brandLogoNavContainer">
      <a class="logo" href="/">
        <img
          src="../../public/assets/logo-dark.svg"
          alt="InterContinental Hanoi Westlake Logo"
          width="200"
          height="80"
          title="InterContinental Hanoi Westlake"
          class="dark-logo"
        />
      </a>
    </div>
  </header>

  <div id="main">
    <div class="container">
      <div class="payments-page-title">
        <h1 class="ng-star-inserted">Hoàn tất đặt phòng của bạn</h1>
        <!-- <h1 class="ng-star-inserted">Complete your reservation</h1> -->
      </div>

      <div class="payments">
        <div class="left-column">
          <div class="explicit-guest-section">
            <div class="row">
              <div class="col">
                <div class="input-group">
                  <label class="input-label">Họ</label>
                  <input
                    class="input-main"
                    @focusout="focusoutFirstName"
                    :class="{ 'input-error': error.firstName }"
                    v-model="payments.firstName"
                  />
                  <div class="error-text" v-if="error.firstName">
                    Nhập họ
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="input-group">
                  <label class="input-label">Tên</label>
                  <input
                    class="input-main"
                    @focusout="focusoutLastName"
                    :class="{ 'input-error': error.lastName }"
                    v-model="payments.lastName"
                  />
                  <div class="error-text" v-if="error.lastName">
                    Nhập tên
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="input-group">
                  <label class="input-label">Email</label>
                  <input
                    class="input-main"
                    @focusout="focusoutEmailAddress"
                    :class="{ 'input-error': error.email }"
                    v-model="payments.email"
                  />
                  <div class="error-text" v-if="error.email">Nhập email.</div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="input-group">
                  <label class="input-label">Địa chỉ</label>
                  <input
                    class="input-main"
                    @focusout="focusoutAddress"
                    :class="{ 'input-error': error.address }"
                    v-model="payments.address"
                  />
                  <div class="error-text" v-if="error.address">
                    Nhập địa chỉ.
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="input-group">
                  <label class="input-label">Số điện thoại</label>
                  <input
                    class="input-main"
                    @focusout="focusoutPhoneNumber"
                    :class="{ 'input-error': error.phoneNumber }"
                    v-model="payments.phoneNumber"
                  />
                  <div class="error-text" v-if="error.phoneNumber">
                    Nhập số điện thoại.
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="row">
              <div class="col">
                <div class="input-group">
                  <label class="input-label">First Name</label>
                  <input
                    class="input-main"
                    @focusout="focusoutFirstName"
                    :class="{ 'input-error': error.firstName }"
                    v-model="payments.firstName"
                  />
                  <div class="error-text" v-if="error.firstName">
                    Enter first name.
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="input-group">
                  <label class="input-label">Last Name</label>
                  <input
                    class="input-main"
                    @focusout="focusoutLastName"
                    :class="{ 'input-error': error.lastName }"
                    v-model="payments.lastName"
                  />
                  <div class="error-text" v-if="error.lastName">
                    Enter last name.
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="input-group">
                  <label class="input-label">Email Address</label>
                  <input
                    class="input-main"
                    @focusout="focusoutEmailAddress"
                    :class="{ 'input-error': error.email }"
                    v-model="payments.email"
                  />
                  <div class="error-text" v-if="error.email">Enter email.</div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="input-group">
                  <label class="input-label">Address</label>
                  <input
                    class="input-main"
                    @focusout="focusoutAddress"
                    :class="{ 'input-error': error.address }"
                    v-model="payments.address"
                  />
                  <div class="error-text" v-if="error.address">
                    Enter address.
                  </div>
                </div>
              </div>
            </div> -->

            <!-- <div class="row">
              <div class="col">
                <div class="input-group">
                  <label class="input-label">City/Town</label>
                  <input
                    class="input-main"
                    @focusout="focusoutCity"
                    :class="{ 'input-error': error.city }"
                    v-model="payments.city"
                  />
                  <div class="error-text" v-if="error.city">
                    Enter city/town.
                  </div>
                </div>
              </div>
            </div> -->

            <!-- <div class="row">
              <div class="col">
                <div class="input-group">
                  <label class="input-label">Postal Code</label>
                  <input
                    class="input-main"
                    @focusout="focusoutPostalCode"
                    :class="{ 'input-error': error.postalCode }"
                    v-model="payments.postalCode"
                  />
                  <div class="error-text" v-if="error.postalCode">
                    Enter your zip/postal code.
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="input-group">
                  <label class="input-label">Phone Number</label>
                  <input
                    class="input-main"
                    @focusout="focusoutPhoneNumber"
                    :class="{ 'input-error': error.phoneNumber }"
                    v-model="payments.phoneNumber"
                  />
                  <div class="error-text" v-if="error.phoneNumber">
                    Enter phone number.
                  </div>
                </div>
              </div>
            </div> -->
          </div>

          <!-- <div class="payment-terms-and-conditions">
            <p class="ng-star-inserted">
              By booking I certify that I have read and accept the
              <a
                class="underline"
                href="https://www.ihg.com/content/us/en/customer-care/tc"
                target="_blank"
                >Terms of Use</a
              >
              and
              <a
                class="underline"
                href="https://www.ihg.com/content/us/en/customer-care/privacy_statement"
                target="_blank"
                >Privacy Statement</a
              >
              and I have read and understand the Rate Description and Rate Rules
              for my reservation.
            </p>
            <div class="ng-star-inserted">
              <p>
                I am at least 18 years of age and at least one guest in my party
                will meet the minimum check-in age requirement for the hotel
                upon arrival.
              </p>
              <p>*Minimum Check-In Age: 18</p>
            </div>
            <div class="term-and-condition">
              <p>
                By joining IHG One Rewards I certify that I have read and accept
                the
                <a
                  class="underline"
                  href="https://www.ihg.com/content/us/en/customer-care/member-tc.html"
                  target="_blank"
                  >IHG One Rewards Membership Terms and Conditions</a
                >,
                <a
                  class="underline"
                  href="https://www.ihg.com/content/us/en/customer-care/privacy_statement"
                  target="_blank"
                  >Privacy Statement</a
                >
                and
                <a
                  class="underline"
                  href="https://www.ihg.com/content/us/en/customer-care/privacy_statement#california-notice-financial-incentive"
                  target="_blank"
                  >California Notice of Financial Incentive</a
                >.
              </p>
            </div>

            <button @click="handlePayment" class="reservation-button themeBG">
              Book for {{ totalPrice }} USD
              <div class="subtext ng-star-inserted"></div>
            </button>
          </div> -->
          <div class="payment-terms-and-conditions">
            <p class="ng-star-inserted">
              Khi đặt phòng, tôi xác nhận rằng tôi đã đọc và chấp nhận
              <a
                class="underline"
                href="https://www.ihg.com/content/us/en/customer-care/tc"
                target="_blank"
                >Điều khoản sử dụng</a
              >
              và
              <a
                class="underline"
                href="https://www.ihg.com/content/us/en/customer-care/privacy_statement"
                target="_blank"
                >Tuyên bố về quyền riêng tư</a
              >
              và tôi đã đọc và hiểu Mô tả giá và Quy tắc về giá cho đặt phòng của mình.
            </p>
            <div class="ng-star-inserted">
              <p>
                Tôi ít nhất 18 tuổi và ít nhất một khách trong đoàn của tôi sẽ 
                đáp ứng yêu cầu về độ tuổi nhận phòng tối thiểu của khách sạn khi đến nơi.
              </p>
              <p>*Độ tuổi nhận phòng tối thiểu: 18</p>
            </div>
            <div class="term-and-condition">
              <p>
                Khi tham gia khách sạn Huyền Thu, tôi xác nhận rằng tôi đã đọc và chấp nhận
                <a
                  class="underline"
                  href="https://www.ihg.com/content/us/en/customer-care/member-tc.html"
                  target="_blank"
                  >Điều khoản và điều kiện thành viên khách sạn Huyền Thu</a
                >,
                <a
                  class="underline"
                  href="https://www.ihg.com/content/us/en/customer-care/privacy_statement"
                  target="_blank"
                  >Tuyên bố về quyền riêng tư</a
                >
                và
                <a
                  class="underline"
                  href="https://www.ihg.com/content/us/en/customer-care/privacy_statement#california-notice-financial-incentive"
                  target="_blank"
                  >Thông báo về ưu đãi tài chính của California</a
                >.
              </p>
            </div>

            <!-- <button @click="handlePayment" class="reservation-button themeBG">
              Book for {{ totalPrice }} USD
              <div class="subtext ng-star-inserted"></div>
            </button> -->
            <button @click="handlePayment" class="reservation-button themeBG">
              Đặt phòng
              <div class="subtext ng-star-inserted"></div>
            </button>
          </div>
        </div>
        <div class="right-column">
          <div
            class="primary-photo ng-star-inserted"
            style="
              background-image: url('https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-8359432401-original?wid=680&amp;fit=constrain');
            "
          ></div>

          <div class="icon-name-address-container">
            <div
                data-slnm-ihg="hotelBrandLogoSID"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect width="40" height="40" rx="3" fill="#B38B7A"></rect>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.1779 14.3048C23.1779 14.3048 21.1439 14.275 21.1439 16.8886C21.1439 19.5097 21.1513 23.1151 21.1513 23.1151C21.1513 23.1151 21.1513 23.2158 21.1549 23.3798C21.1733 24.036 21.4087 25.684 23.1779 25.807V26.0345H16.7963V25.807C18.5655 25.684 18.7862 24.036 18.8156 23.3798C18.8193 23.2158 18.8193 23.1151 18.8193 23.1151C18.8193 23.1151 18.8303 19.5097 18.8303 16.8886C18.8303 14.275 16.7963 14.3048 16.7963 14.3048V14.0848H23.1779V14.3048ZM19.9926 9.92015C19.4593 10.334 18.606 10.9045 17.6497 11.7508C16.9949 12.325 16.252 13.0409 15.6414 13.8723C14.9168 14.8342 14.2878 15.9901 13.9421 17.3547C13.7361 18.1861 13.6257 19.0809 13.6257 20.0764C13.6257 21.5343 13.9274 22.8429 14.3651 23.9279C15.2772 26.1911 16.8662 27.6675 18.2161 28.7078C18.5177 28.9427 18.7862 29.1254 19.0474 29.3043C19.2276 29.4199 19.4299 29.5504 19.5733 29.6511C19.7278 29.7592 19.9559 29.9046 19.989 29.9307C20.2354 29.7592 20.3788 29.6697 20.6547 29.487C20.9195 29.2931 21.2101 29.103 21.5338 28.8644C21.8869 28.6034 22.1995 28.3648 22.6409 27.977C22.7549 27.8652 22.9572 27.6936 23.0786 27.5706C24.7117 26.0121 26.3191 23.6707 26.3191 20.0354C26.3191 17.4069 25.44 15.36 24.3071 13.8387C22.7844 11.7806 20.8166 10.6248 19.9926 9.92015ZM12.732 19.9907C12.732 13.0744 18.3411 10.1886 19.989 8.80535C21.6662 10.1886 27.2754 13.0744 27.2754 19.9907C27.2754 26.9107 21.6589 29.7965 19.9926 31.1798C18.3485 29.7965 12.732 26.9107 12.732 19.9907ZM12 19.9907C12 27.2872 18.2492 30.5347 19.9926 32C21.7508 30.5347 28 27.2872 28 19.9907C28 12.7016 21.7618 9.46155 19.9926 8C18.2345 9.46155 12 12.7016 12 19.9907Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            <div class="name-address-container">
              <p class="brand-name">
                Huyền Thu Hanoi Westlake
              </p>
              <p class="address">
                05 Tu Hoa Tay Ho, Hanoi, Vietnam
              </p>
            </div>
          </div>

          <div
            class="primary-photo ng-star-inserted"
            style="
              background-image: url('https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-8359432381-4x3?wid=750&fit=constrain');
            "
          ></div>

          <div class="icon-name-address-container">
            <div
                data-slnm-ihg="hotelBrandLogoSID"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect width="40" height="40" rx="3" fill="#B38B7A"></rect>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.1779 14.3048C23.1779 14.3048 21.1439 14.275 21.1439 16.8886C21.1439 19.5097 21.1513 23.1151 21.1513 23.1151C21.1513 23.1151 21.1513 23.2158 21.1549 23.3798C21.1733 24.036 21.4087 25.684 23.1779 25.807V26.0345H16.7963V25.807C18.5655 25.684 18.7862 24.036 18.8156 23.3798C18.8193 23.2158 18.8193 23.1151 18.8193 23.1151C18.8193 23.1151 18.8303 19.5097 18.8303 16.8886C18.8303 14.275 16.7963 14.3048 16.7963 14.3048V14.0848H23.1779V14.3048ZM19.9926 9.92015C19.4593 10.334 18.606 10.9045 17.6497 11.7508C16.9949 12.325 16.252 13.0409 15.6414 13.8723C14.9168 14.8342 14.2878 15.9901 13.9421 17.3547C13.7361 18.1861 13.6257 19.0809 13.6257 20.0764C13.6257 21.5343 13.9274 22.8429 14.3651 23.9279C15.2772 26.1911 16.8662 27.6675 18.2161 28.7078C18.5177 28.9427 18.7862 29.1254 19.0474 29.3043C19.2276 29.4199 19.4299 29.5504 19.5733 29.6511C19.7278 29.7592 19.9559 29.9046 19.989 29.9307C20.2354 29.7592 20.3788 29.6697 20.6547 29.487C20.9195 29.2931 21.2101 29.103 21.5338 28.8644C21.8869 28.6034 22.1995 28.3648 22.6409 27.977C22.7549 27.8652 22.9572 27.6936 23.0786 27.5706C24.7117 26.0121 26.3191 23.6707 26.3191 20.0354C26.3191 17.4069 25.44 15.36 24.3071 13.8387C22.7844 11.7806 20.8166 10.6248 19.9926 9.92015ZM12.732 19.9907C12.732 13.0744 18.3411 10.1886 19.989 8.80535C21.6662 10.1886 27.2754 13.0744 27.2754 19.9907C27.2754 26.9107 21.6589 29.7965 19.9926 31.1798C18.3485 29.7965 12.732 26.9107 12.732 19.9907ZM12 19.9907C12 27.2872 18.2492 30.5347 19.9926 32C21.7508 30.5347 28 27.2872 28 19.9907C28 12.7016 21.7618 9.46155 19.9926 8C18.2345 9.46155 12 12.7016 12 19.9907Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            <div class="name-address-container">
              <p class="brand-name">
                Huyền Thu Hanoi Westlake
              </p>
              <p class="address">
                05 Tu Hoa Tay Ho, Hanoi, Vietnam
              </p>
            </div>
          </div>

          <div
            class="primary-photo ng-star-inserted"
            style="
              background-image: url('https://digital.ihg.com/is/image/ihg/crowne-plaza-vinh-yen-city-8362225974-4x3?wid=750&fit=constrain');
            "
          ></div>

          <div class="icon-name-address-container">
            <div
                data-slnm-ihg="hotelBrandLogoSID"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect width="40" height="40" rx="3" fill="#B38B7A"></rect>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.1779 14.3048C23.1779 14.3048 21.1439 14.275 21.1439 16.8886C21.1439 19.5097 21.1513 23.1151 21.1513 23.1151C21.1513 23.1151 21.1513 23.2158 21.1549 23.3798C21.1733 24.036 21.4087 25.684 23.1779 25.807V26.0345H16.7963V25.807C18.5655 25.684 18.7862 24.036 18.8156 23.3798C18.8193 23.2158 18.8193 23.1151 18.8193 23.1151C18.8193 23.1151 18.8303 19.5097 18.8303 16.8886C18.8303 14.275 16.7963 14.3048 16.7963 14.3048V14.0848H23.1779V14.3048ZM19.9926 9.92015C19.4593 10.334 18.606 10.9045 17.6497 11.7508C16.9949 12.325 16.252 13.0409 15.6414 13.8723C14.9168 14.8342 14.2878 15.9901 13.9421 17.3547C13.7361 18.1861 13.6257 19.0809 13.6257 20.0764C13.6257 21.5343 13.9274 22.8429 14.3651 23.9279C15.2772 26.1911 16.8662 27.6675 18.2161 28.7078C18.5177 28.9427 18.7862 29.1254 19.0474 29.3043C19.2276 29.4199 19.4299 29.5504 19.5733 29.6511C19.7278 29.7592 19.9559 29.9046 19.989 29.9307C20.2354 29.7592 20.3788 29.6697 20.6547 29.487C20.9195 29.2931 21.2101 29.103 21.5338 28.8644C21.8869 28.6034 22.1995 28.3648 22.6409 27.977C22.7549 27.8652 22.9572 27.6936 23.0786 27.5706C24.7117 26.0121 26.3191 23.6707 26.3191 20.0354C26.3191 17.4069 25.44 15.36 24.3071 13.8387C22.7844 11.7806 20.8166 10.6248 19.9926 9.92015ZM12.732 19.9907C12.732 13.0744 18.3411 10.1886 19.989 8.80535C21.6662 10.1886 27.2754 13.0744 27.2754 19.9907C27.2754 26.9107 21.6589 29.7965 19.9926 31.1798C18.3485 29.7965 12.732 26.9107 12.732 19.9907ZM12 19.9907C12 27.2872 18.2492 30.5347 19.9926 32C21.7508 30.5347 28 27.2872 28 19.9907C28 12.7016 21.7618 9.46155 19.9926 8C18.2345 9.46155 12 12.7016 12 19.9907Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            <div class="name-address-container">
              <p class="brand-name">
                Huyền Thu Hanoi Westlake
              </p>
              <p class="address">
                05 Tu Hoa Tay Ho, Hanoi, Vietnam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import {useDatesStore} from '@/stores/dates';
import {useBookingStore} from '@/stores/booking';

const useDates = useDatesStore();
const useBooking = useBookingStore();

const totalPrice = ref<number>(0);

onBeforeMount(() => {
  totalPrice.value = useDates.total * useBooking.prices;
})

const payments = ref<any>({
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  postalCode: "",
  phoneNumber: "",
});

const error = ref<any>({
  firstName: false,
  lastName: false,
  email: false,
  address: false,
  city: false,
  postalCode: false,
  phoneNumber: false,
});

const handlePayment = () => {
    if(validateForm() == false){
        return;
    }
    else{
        console.log("call api")
    }
}

const validateForm = (): boolean => {
  let index = 0;
  if (payments.value?.firstName == "") {
    error.value.firstName = true;
    index++;
  }
  if (payments.value?.lastName == "") {
    error.value.lastName = true;
    index++;
  }
  if (payments.value?.email == "") {
    error.value.email = true;
    index++;
  }
  if (payments.value?.address == "") {
    error.value.address = true;
    index++;
  }
//   if (payments.value?.city == "") {
//     error.value.city = true;
//     index++;
//   }
//   if (payments.value?.postalCode == "") {
//     error.value.postalCode = true;
//     index++;
//   }
  if (payments.value?.phoneNumber == "") {
    error.value.phoneNumber = true;
    index++;
  }

  if (index !== 0) {
    return false;
  }

  return true;
};

const focusoutFirstName = () => {
  if (payments.value?.firstName == "") {
    error.value.firstName = true;
  } else {
    error.value.firstName = false;
  }
};

const focusoutLastName = () => {
  if (payments.value?.lastName == "") {
    error.value.lastName = true;
  } else {
    error.value.lastName = false;
  }
};

const focusoutEmailAddress = () => {
  if (payments.value?.email == "") {
    error.value.email = true;
  } else {
    error.value.email = false;
  }
};

const focusoutAddress = () => {
  if (payments.value?.address == "") {
    error.value.address = true;
  } else {
    error.value.address = false;
  }
};

const focusoutCity = () => {
  if (payments.value?.city == "") {
    error.value.city = true;
  } else {
    error.value.city = false;
  }
};

const focusoutPostalCode = () => {
  if (payments.value?.postalCode == "") {
    error.value.postalCode = true;
  } else {
    error.value.postalCode = false;
  }
};

const focusoutPhoneNumber = () => {
  if (payments.value?.phoneNumber == "") {
    error.value.phoneNumber = true;
  } else {
    error.value.phoneNumber = false;
  }
};
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");
@font-face {
  font-family: "Graphik Semibold";
  src: url(../assets/fonts/Graphik-Regular-Web.woff2);
  font-weight: 400;
}

@font-face {
  font-family: "Graphik Semibold";
  src: url(../assets/fonts/Graphik-Medium-Web.woff2);
  font-weight: 500;
}

@font-face {
  font-family: "Graphik Semibold";
  src: url(../assets/fonts/Graphik-Semibold-Web.woff2);
  font-weight: 600;
}

* {
  font-family: "Graphik Semibold";
  font-weight: 400;
}

#box {
  background-color: #f5f5f5;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: -10;
}

header {
  background-color: white;
  padding: 20px 0px;
  margin-bottom: 40px;
  overflow-x: hidden;

  .brandLogoNavContainer {
    margin: 0 178.5px;
  }
}

#main {
  overflow-x: hidden;

  .container {
    margin: 0 178.5px;

    .payments-page-title {
      display: flex;
      background-color: transparent;
      padding-top: 15px;
      padding-bottom: 25px;
      padding-left: 0;
      padding-right: 0;

      h1 {
        font-family: Graphik-Regular, sans-serif;
        font-size: 30px;
        line-height: 115%;
        color: #000;
        margin: 0;
        padding: 0;
      }
    }

    .payments {
      display: flex;
      gap: 30px;
      .left-column {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex: 0 0 63%;

        .explicit-guest-section {
          background-color: #fff;
          padding: 15px;
          border-radius: 10px;
          margin-bottom: 30px;
        }

        .payment-terms-and-conditions {
          background-color: #fff;
          padding: 15px;
          border-radius: 10px;
          margin-bottom: 30px;
        }

        .explicit-guest-section > div {
          margin-bottom: 30px;
        }
      }

      .right-column {
        display: flex;
        flex-direction: column;
        flex: 0 0 32%;
        background: #fff;
        margin-bottom: 30px;
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
      }

      .input-group {
        display: flex;
        flex-direction: column;
        position: relative;
        .input-label {
          color: #000;
          font-size: 16px;
          line-height: 150%;
          font-family: Graphik-Medium, sans-serif;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .input-main {
          height: 48px;
          border: 1px solid #c2c7ca;
          border-radius: 5px;
          padding: 10px;
          font-size: 16px;
          line-height: 24px;
          color: #555;
          font-family: Graphik-Regular, sans-serif;
        }

        .input-error {
          border: 1px solid #bc261a !important;
        }

        .error-text {
          position: absolute;
          margin-top: 10px;
          margin-bottom: 0;
          font-size: 14px;
          line-height: 150%;
          font-family: Graphik-Medium, sans-serif;
          color: #bc261a;
          bottom: -20px;
        }
      }
    }
  }
}

.underline {
  color: #b38b7a;
  text-decoration: underline;
  cursor: pointer;
  font-family: Graphik-Medium;
}

.reservation-button {
  font-family: Graphik-Medium, sans-serif;
  font-size: 18px;
  min-height: 75px;
  line-height: 150%;
  padding-top: 15px;
  padding-bottom: 15px;
  color: #fff;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  border-width: 0;
  background-color: #b38b7a;
  margin-top: 10px;
  margin-bottom: 5px;
}

.primary-photo {
  margin-bottom: 15px;
  aspect-ratio: 1/0.56;
  background-size: cover;
  display: flex;
  background-position: center;
}

.icon-name-address-container{
    width: 100%;
    display: flex;
    padding: 0 20px 15px;
}

.icon-name-address-container .name-address-container{
    flex-direction: column;
    margin-left: 8px;
    margin-right: 8px;
}

.address{
    margin: 0;
    font-size: 14px;
    line-height: 150%;
    color: #555;
}
</style>
