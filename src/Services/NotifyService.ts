import { Notyf } from "notyf";
import 'notyf/notyf.min.css';


class NotifyService {

    private notification = new Notyf({ duration: 3000, position: { x: "right", y: "bottom" } });

    public success(message: string): void {
        this.notification.success(message);
    }
    
    public error(err: any): void {
        const message = this.getErrorMessage(err);
        this.notification.error(message);
    }

    private getErrorMessage(err: any): string {
        if ((err.response?.data).includes("ER_DUP_ENTRY")) return "סיור זה כבר הוזמן על ידך"
        if (typeof err === "string") return err;
        if (typeof err.response?.data === "string") return err.response.data;
        if (typeof err.message === "string") return err.message;
        return "Some error occurred, please try again.";
    }
}

const notifyService = new NotifyService();

export default notifyService;