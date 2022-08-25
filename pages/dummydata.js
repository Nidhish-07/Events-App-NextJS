const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Press conference",
    description:
      "lorem epsum",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2022-11-12",
    image: "images/press-conference.png",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Reunion",
    description:
      "lorem epsum",
    location: "New Wall Street 5, 98765 New Work",
    date: "2022-08-30",
    image: "images/reunion.png",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Wedding",
    description:
      "lorem epsum",
    location: "My Street 12, 10115 Broke City",
    date: "2023-04-10",
    image: "images/wedding.png",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }