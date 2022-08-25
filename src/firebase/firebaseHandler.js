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
      childArray.push(location);
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
  const id = createUUID();
  const oppRef = ref(db, "opportunities/" + id);
  set(oppRef, {
    dateFrom: dateFrom,
    dateTo: dateTo,
    description: description,
    id: id,
    location: location,
    title: title,
    spots: spots,
  });
};

export const addLocations = (location) => {
  const id = createUUID();
  const locRef = ref(db, "locations/" + id);
  set(locRef, {
    location: location,
  });
};

const createUUID = () => {
  return crypto.randomUUID();
};

// TODO: Refactor this into a readOpportunity, and a reserveOpportunity that calls it.
export const reserveOpportunity = async (id) => {
  // granb the opportunity from db
  const oppRef = ref(db, `opportunities/${id}`);
  get(oppRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const opportunity = snapshot.val();

        if (opportunity.spots < 1) {
          console.error("Error booking spot, less than one available");
          return false;
        }
        opportunity.spots -= 1;
        set(oppRef, {
          ...opportunity,
        });
        return true;
      } else {
        console.log("No data available");
        return false;
      }
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
};
