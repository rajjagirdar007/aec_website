

const test = {
    props: ['shared', 'selectedStack'],
    data: function() {
        return { shared: this.shared }
    },
    template: '#test',
    methods: {
        valueGet: function(e) {
            const ButtonValue = e.target.value;
            this.shared.selectedStack.Value = ButtonValue
            shared.selectedStack.places.push(ButtonValue)
            this.shared.selectedStack.shelf = ButtonValue.substring(3)
            console.log(ButtonValue)
        }
    }
}

const map = {
    props: ['shared', 'selectedStack'],
    data: function() {
        return { shared: this.shared }
    },
    template: '#maptemp',


};

const one = {
    props: ['shared', 'selectedStack'],
    data: function() {
        return { shared: this.shared }
    },
    methods:{
        sort:function(s) {
          if(s === this.shared.currentSort) {
            this.shared.currentSortDir = this.shared.currentSortDir==='asc'?'desc':'asc';
          }
          this.shared.currentSort = s;
        },



        up:function() {
          if((this.shared.currentPage*this.shared.pageSize) < this.shared.inventory.length)
            this.shared.currentPage++;
        },


        down:function() {
          if(this.shared.currentPage > 1) this.shared.currentPage--;
        },
        read:function() {
          const rows= this.sortedInventory;
this.shared.place = rows;
        
        },
        valueGet: function(e) {
          const ButtonValue = e.target.value.toString();
          this.shared.selectedStack.Value = ButtonValue.toString();
          this.shared.selectedStack.palces = [];
          this.shared.selectedStack.places.push(ButtonValue);

          this.shared.selectedStack.shelf = ButtonValue.substring(7)
        },


    
      },
      watch: {
        filter() {
          console.log('reset to p1 due to filter');
          this.currentPage = 1;
        }
      },

      computed:{
        // filteredInventory: function() {
        //     return this.shared.inventory.filter(c => {
        //       if(this.shared.filter == '') return true;
        //       if(this.shared.filter) {
        //         return c.brand.toLowerCase().indexOf(this.shared.filter.toLowerCase()) >= 0;
        //       }else {
        //       return c.category.toLowerCase().indexOf(this.shared.filter.toLowerCase()) >= 0;
        //       }
        //     })
        //   },
       
            filteredRows() {
              return this.shared.inventory.filter(c => {
                const employee = c.Employee.toString().toLowerCase();
                const table = c.Table.toString().toLowerCase();
                const cpu = c.CPU.toString().toLowerCase();
                const cpu_cooler = c.CPU_Cooler.toString().toLowerCase();

                const gpu = c.GPU.toString().toLowerCase();
                const motherboard = c.Motherboard.toString().toLowerCase();
                const mem = c.Non_Volitaile_MEM.toString().toLowerCase();

                const ram = c.RAM.toString().toLowerCase();

                const ipv4 = c.IP_Address_v4.toString().toLowerCase();
                const ipv6 = c.IP_Address_v6.toString().toLowerCase();


                const searchTerm = this.shared.filter.toLowerCase();
          
                return employee.includes(searchTerm) ||
                table.includes(searchTerm) ||
                cpu.includes(searchTerm)  ||
                gpu.includes(searchTerm) ||
                motherboard.includes(searchTerm) ||
                ram.includes(searchTerm) ||
                ipv4.includes(searchTerm) ||
                ipv6.includes(searchTerm) ||
                mem.includes(searchTerm) ||

                cpu_cooler.includes(searchTerm) 



              });
            },
        sortedInventory:function() {
            return this.filteredRows.sort((a,b) => {
                let change = 1;
            if(this.shared.currentSortDir === 'desc') change = -1;
            if(a[this.shared.currentSort] < b[this.shared.currentSort]) return -1 * change;
            if(a[this.shared.currentSort] > b[this.shared.currentSort]) return 1 * change;
            return 0;
          }).filter((row, index) => {
            let start = (this.shared.currentPage-1)*this.shared.pageSize;
            let end = this.shared.currentPage*this.shared.pageSize;
            if(index >= start && index < end) return true;
          });
        },

      },
    template: '#one'
}

const two = {
    props: ['shared', 'selectedStack'],
    data: function() {
        return { shared: this.shared }
    },
    template: '#temp'
}



new Vue({
    el: '#app',
    router: new VueRouter({
        routes: [
            { path: '/map', component: map },

            { path: '/test', component: test },

            { path: '/1', component: one },

            { path: '/2', component: two }

        ]
    }),
    data: {
        shared: {
            shelf: '',
            place:[


            ],
            filter:'',
            inventory: [],
            currentSort:'name',
            currentSortDir:'asc',
            pageSize:1000,
            currentPage:1,
            selectedStack: {
                Value: '',
                places:[],
                shelf: '',
                top: '220px',
                left: '284px'
            },
            styleObject: {
                position: 'absolute',
                height: '35px',
                width: '78px',
                top: '220px',
                bottom: '0',
                left: '285px',
                right: '0',
                background: 'rgba(29, 106, 154, 0.72)',
                color: '#fff',
                'text-align': 'center',
                transition: 'opacity .2s, visibility .2s'
            }
        },
        



    },
    
    mounted() {
        axios
            .get('https://www.mpengs.nyc/vuedata')
            .then(
                response => (this.shared.inventory = response.data))

    },
     


})