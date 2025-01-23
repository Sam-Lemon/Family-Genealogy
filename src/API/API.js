const API_INDIVIDUAL = "https://679197a4af8442fd737a5bee.mockapi.io/individual";

const fetchIndividual = async () => {
  try {
    const response = await fetch(API_INDIVIDUAL);
    if (!response.ok) {
      throw new Error("Failed to fetch individuals");
    }

    const data = await response.json();
    console.log("Individuals: ", data);
    return data;
  } catch (e) {
    console.error("Error fetching individuals: ", e);
    throw e;
  }
};

const addIndividual = async (individualData) => {
    try {
        const response = await fetch(API_INDIVIDUAL, {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(individualData),
            });

            if (!response.ok) {
                throw new Error("Failed to add individual");
            }

            const data = await response.json();
            console.log("Added individual: ", data);
            return data;
        } catch (e) {
            console.error("Error adding individual: ", e);
            throw e;
        }
    };

const updateIndividual = async (individualId, individualData) => {
    const url = `${API_INDIVIDUAL}/${individualId}`;

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(individualData),
        });

        if (!response.ok) {
            throw new Error("Failed to update individual");
        }

        const data = await response.json();
        console.log("Updated individual: ", data);
        return data;
    } catch (e) {
        console.error("Error updating individual: ", e);
        throw e;
    }
};

const deleteIndividual = async (individualId) => { 
    const url = `${API_INDIVIDUAL}/${individualId}`;

    try {
        const response = await fetch(url, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Failed to delete individual");
        }
        console.log(`Deleted individual with ID: , ${individualId}`);
    } catch (e) {
        console.error("Error deleting individual: ", e);
        throw e;
    }
};

export {
    fetchIndividual,
    addIndividual,
    updateIndividual,
    deleteIndividual
};


