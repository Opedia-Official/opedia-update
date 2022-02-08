import { ExpertTeam, ViewService, Gallary, ProjectCount } from "../../Utils/fakeData"


export default function handler(req, res) {
    res.status(200).json({ ExpertTeam, ViewService, Gallary, ProjectCount });
}