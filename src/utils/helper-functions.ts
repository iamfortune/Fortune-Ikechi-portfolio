import moment from "moment";

export const truncateText = (text: string, maxNum: number) => {
	return text.length <= maxNum ? text : `${text.slice(0, maxNum)}...`;
};

export const convertDate = (date: string | Date) => {
	return moment(date).format("MMM Do, h:mm a");
};
