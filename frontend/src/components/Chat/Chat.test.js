import { shallow } from "enzyme";
import {ToastContainer} from 'react-toastify';
import Chat from "./Chat";
import DateSuggestions from "./DateSuggestions/DateSuggestions";

describe("MyProfile", () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Chat/>);
      });

    it('check if the add admin text is the same', () => {
        let header = wrapper.find(".sendbutton").text();
        expect(header).toBe("Send");
      });
})