import _ from 'lodash';

export default function useLocalStorage() {

    function setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    function getItem(key) {
        const item = localStorage.getItem(key)
        return JSON.parse(item)
    }

    function deleteItem(key) {
        localStorage.removeItem(key)
    }

    return {
        setItem,
        getItem,
        deleteItem
    }
}