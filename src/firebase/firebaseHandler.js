import { getDatabase, ref, get, set } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCmTOVrc7dUkbtb1DzJoz_z9gxKBSt3aIY",
  authDomain: "find-and-help.firebaseapp.com",
  databaseURL:
    "https://find-and-help-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "find-and-help",
  appId: "1:287141668841:web:7931e202f8f469574a8d78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const readOpportunities = () => {
  const oppRef = ref(db, "opportunities");
  return get(oppRef).then((snapshot) => {
    const childArray = [];
    snapshot.forEach((child) => {
      const { dateFrom, dateTo, description, id, location, title, spots } =
        child.val();
      childArray.push({
        dateFrom,
        dateTo,
        description,
        id,
        location,
        title,
        spots,
      });
    });
    return childArray;
  });
};

export const readLocations = () => {
  const locRef = ref(db, "locations");
  return get(locRef).then((snapshot) => {
    const childArray = [];
    snapshot.forEach((child) => {
      const { location } = child.val();
      childArray.push({
        location,
      });
    });
    return childArray;
  });
};

export const writeOpportunities = (
  dateFrom,
  dateTo,
  description,
  location,
  title,
  spots
) => {
  const id = createID();
  const oppRef = ref(db, "opportunities/" + id);
  set(oppRef, {
    id: createUUID(),
    dateFrom: dateFrom,
    dateTo: dateTo,
    description: description,
    location: location,
    title: title,
    spots: spots,
  });
};

export const addLocations = (location) => {
  const id = createID();
  const locRef = ref(db, "locations/" + id);

  set(locRef, {
    location: location,
  });
};

const createID = () => {
  const date = new Date();
  return date.getTime().toString();
};

const createUUID = () => {
  return crypto.randomUUID();
};

export const reserveOpportunity = (id) => {
  const opportunity = readOpportunity(id);
  if (opportunity.spots < 1) {
    console.error("Unable to reserve spot - none available");
    return;
  }

  opportunity.spots -= 1;
  const oppRef = ref(db, "opportunities/" + id);
  set(oppRef, {
    opportunity: opportunity,
  });
};

const readOpportunity = (id) => {
  console.log(id);
  const oppRef = ref(db, `opportunities/${id}`);
  get(oppRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
