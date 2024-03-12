import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/{apiVersion}/{endpoint}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch currency data');
                }
                const jsonData = await response.json();
                setData(jsonData[currency]);
            } catch (error) {
                console.error('Error fetching currency data:', error);
                setData({}); // Set empty data in case of error
            }
        };

        fetchData();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
