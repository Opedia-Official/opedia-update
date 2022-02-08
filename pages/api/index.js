import { ExpertTeam, ViewService, Gallary, ProjectCount } from "../../Utils/fakeData"
// import { ExpertTeam } from "../../Utils/fakeData"


export default function handler(req, res) {
    res.status(200).json(JSON.stringify({ ExpertTeam, ViewService, Gallary, ProjectCount }));
}