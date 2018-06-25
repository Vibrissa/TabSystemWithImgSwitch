import html2canvas from "html2canvas";
export const state = {
  box: "123",
  tabcontent: ["forms", "tables", "progress"],
  tab_active_index: 2,
  tab_databox: [
    {
      form: {
        name: "",
        region: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    },
    {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ]
    },
    { progressvalue: 0 }
  ],
  tab_imgbox: [{ base64data: "" }, { base64data: "" }, { base64data: "" }],
  is_show_imgswitch: false
};

export const mutations = {
  async switchTabIndex(state, data) {
    const old_index = state.tab_active_index;
    const canvas = await html2canvas(document.querySelector(".tab-content"));
    const base64data = canvas.toDataURL("image/png");
    state.tab_imgbox[old_index].base64data = base64data;
    state.tab_active_index = data.index;
  },
  SwitchImgSwitch(state, data) {
    state.is_show_imgswitch = !state.is_show_imgswitch;
  }
};
