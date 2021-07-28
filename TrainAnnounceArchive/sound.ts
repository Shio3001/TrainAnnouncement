class AnnounceRoot {
    private time_loop_bool: boolean;
    private start_hour: Number;
    private start_min: Number;

    constructor(wav: string, send_start_hour: Number, send_start_min: Number) {
        this.time_loop_bool = true;
        this.start_hour = send_start_hour;
        this.start_min = send_start_min;
    }


    time_loop(): void {
        while (this.time_loop_bool) {
            const date: Date = new Date();
            const hour: Number = date.getHours();
            const min: Number = date.getMinutes();
            const second: Number = date.getSeconds();
            if (this.start_hour == hour && this.start_min == min) {
                console.log("aaaaaaaaaaaaa")
            }
        }
        return;
    }
}


class AnnounceArrival extends AnnounceRoot {
    constructor(send_wav: string, send_start_hour: Number, send_start_min: Number) {
        super(send_wav, send_start_hour, send_start_min);
    }
}

class AnnounceDeparture extends AnnounceRoot {
    constructor(send_wav: string, send_start_hour: Number, send_start_min: Number) {
        super(send_wav, send_start_hour, send_start_min);
    }
}

class AnnounceStop extends AnnounceRoot {
    constructor(send_wav: string, send_start_hour: Number, send_start_min: Number) {
        super(send_wav, send_start_hour, send_start_min);
    }
}

class AnnounceRun extends AnnounceRoot {
    constructor(send_wav: string, send_start_hour: Number, send_start_min: Number) {
        super(send_wav, send_start_hour, send_start_min);
    }
}