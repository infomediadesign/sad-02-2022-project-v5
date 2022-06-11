import { shallow } from "enzyme";
import Admin from "./Admin";
import Modal from '@mui/material/Modal';
import CRUDTable, {
  Field,
  Pagination,
  DeleteForm
} from "react-crud-table";

describe("MyProfile", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Admin/>);
  });

  it('check if Sidenav is being used', () => {
    expect(wrapper.find(Modal).length).toBe(1);
  });
  it('check if suggestion div exists', () => {
    expect(wrapper.find(".addAdmin").length).toBe(1);
  });
  it('check if the add admin text is the same', () => {
    let header = wrapper.find(".addAdmin").text();
    expect(header).toBe("Add Admin");
  });
  it('check if the CRUD table exists', () => {
    expect(wrapper.find(CRUDTable).length).toBe(1);
  });
  it('check if there are three fields exists', () => {
    expect(wrapper.find(Field).length).toBe(3);
  });
  it('check if pagination exists', () => {
    expect(wrapper.find(Pagination).length).toBe(1);
  });
  it('check if Deleting user exists', () => {
    expect(wrapper.find(DeleteForm).length).toBe(1);
  });
});
