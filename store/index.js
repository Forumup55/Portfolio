import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    isAuth: false,
    profile: null,
    selectedItems: [],
    countries: [],
    cities: [],
    //
    unread_notifications_count: 0,
    notifications: [],
  }),
  getters: {},
  actions: {
    setAuth(payload) {
      this.isAuth = payload;
    },
    setProfile(payload) {
      this.profile = payload;
    },
    setCountries(payload) {
      this.countries = payload;
    },
    setCities(payload) {
      this.cities = payload;
    },
    emptySelectedItems() {
      this.selectedItems = [];
    },
    //
    setNotifications(payload, page) {
      if (page == 1 || !page) {
        this.notifications = payload;
      } else {
        this.notifications.push(...payload);
      }
    },

    setUnreadNotifications(payload) {
      this.unread_notifications_count = payload;
    },

    change_unread_notifications_count(sign) {
      this.unread_notifications_count = eval(
        `${this.unread_notifications_count} ${sign} 1`
      );
    },

    modifyNotification(notify) {
      let index = this.notifications.findIndex((el) => el.id == notify.id);
      this.notifications[index] = notify;
    },

    deleteANotification(notify) {
      this.notifications = this.notifications.filter(
        (el) => el.id !== notify.id
      );
    },
  },
});
