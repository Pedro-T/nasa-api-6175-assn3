import create from 'zustand';
import axios from 'axios';
import {format} from 'date-fns';

function formatDate(date) {
    console.log(date)
    return format(date, "yyyy-MM-dd");
}

const fetchApod = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch(e) {
        console.error(e);
    }
}

const useStore = create((set, get) => (
    {
        currentData: [],
        singleDate: new Date(),
        startDate: new Date(),
        endDate: new Date(),
        count: "1",
        fetchCurrent: async () => {
            set({
                currentData: await fetchApod(`/NASA_APOD`)
            });
        },
        setCount: (count) => set({count: count}),
        fetchRandom: async () => {
            const {count} = get();
            set({
                currentData: await fetchApod(`/NASA_APOD?count=${count}`)
            });
        },
        setSingleDate: (date) => {
            set({singleDate: date})
        },
        fetchSingleDate: async () => {
            const {singleDate} = get();
            set({
                currentData: await fetchApod(`/NASA_APOD?date=${formatDate(singleDate)}`)
            });
        },
        setStartDate: (date) => set({startDate: date}),
        setEndDate: (date) => set({endDate: date}),
        fetchDateRange: async () => {
            const {startDate, endDate} = get();
            set({
                currentData: await fetchApod(`NASA_APOD?start_date=${formatDate(startDate)}&end_date=${formatDate(endDate)}`)
            });
        },
    }
));

export default useStore