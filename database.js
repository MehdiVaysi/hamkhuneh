// همخونه - شبیه‌سازی پایگاه داده (نسخه اولیه)

const database = {
  users: [],
  roommateAds: [],
  houseAds: [],
  messages: []
};

function addUser(user) {
  database.users.push(user);
}

function addRoommateAd(ad) {
  database.roommateAds.push(ad);
}

function addHouseAd(ad) {
  database.houseAds.push(ad);
}

function addMessage(message) {
  database.messages.push(message);
}

function getUsers() {
  return database.users;
}

function getRoommateAds() {
  return database.roommateAds;
}

function getHouseAds() {
  return database.houseAds;
}

function getMessages() {
  return database.messages;
}

console.log("Hamkhuneh Database Ready");
