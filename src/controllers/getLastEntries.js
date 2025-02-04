export default function getLastEntries(req, res) {
    const lastEntries = [ "entry 01", "entry 02", "entry 03", "entry 04", "entry 05" ]

    return res.status(200).send(lastEntries);
};