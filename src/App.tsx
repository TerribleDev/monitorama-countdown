import * as moment from "moment";
import React = require("react");

const monitorama = moment("20180604", "YYYYMMDD");
export class App extends React.Component<any, {remaining: string}> {
    private runningInterval?: number;
    constructor(props: any) {
        super(props);
        this.state = {remaining: this.CalulateTime()};
        this.runningInterval = setInterval(() => {
            this.Update();
        }, 1000);
    }
    public componentWillUnmount() {
        if (this.runningInterval) {
            clearInterval(this.runningInterval);
        }
    }
    public Update() {
        this.setState({remaining: this.CalulateTime()});
    }
    public CalulateTime() {
        const now = moment();
        if (now > monitorama) {
            return "VICTORYYYYYYYYYYYYY";
        } else {
            const duration = moment.duration(monitorama.diff(now));
            return `${duration.months()} months ${duration.days()} days ${duration.hours()} hours ${duration.minutes()} minutes ${duration.seconds()} seconds`;
        }
    }
    public render() {
        return(
            <div>
                <h4 style={{textAlign: "center", marginTop: "30vh", fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "70px"}}>{this.state.remaining}</h4>
            </div>
        );
    }

}