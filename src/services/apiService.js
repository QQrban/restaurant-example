
export async function getMenu() {

    const response = await fetch('https://63c164d699c0a15d28e89cfb.mockapi.io/pety/test');
    return response.json();
}