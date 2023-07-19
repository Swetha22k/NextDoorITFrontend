import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { ServicesService } from 'src/app/services/service/services.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

  allServices?: Service[] = [
    {
      id: "1",
      title: "Hardware Sales",
      description: "Our website offers a convenient online platform for individuals looking to purchase hardware parts.",
      image: "assets/img/bulb.png",
      category: ""
    },
    {
      id: "2",
      title: "Home Services",
      description: "Our skilled team offers on-site hardware services to address any technical issues you may encounter at your home.",
      image: "assets/img/bulb.png",
      category: ""
    },
    {
      id: "3",
      title: "Software Development",
      description: "Whether it's web development, software development, or any other development-related inquiries, we are here to assist you.",
      image: "assets/img/bulb.png",
      category: ""
    },
    {
      id: "4",
      title: "Trouble shoot",
      description: "Our team is ready to provide assistance and troubleshooting support for any issues you may encounter.",
      image: "assets/img/bulb.png",
      category: ""
    },
    {
      id: "5",
      title: "App Development",
      description: "Our team is skilled in developing custom applications tailored to your specific requirements.",
      image: "assets/img/bulb.png",
      category: ""
    },
    {
      id: "6",
      title: "Trainings",
      description: "Our services extend to providing training and online courses focused on various aspects of development.",
      image: "assets/img/bulb.png",
      category: ""
    }
  ];
  services?: Service[] = [
    {
      id: "1",
      title: "Hardware Sales",
      description: "Our website offers a convenient online platform for individuals looking to purchase hardware parts.",
      image: "assets/img/bulb.png",
      category: ""
    },
    {
      id: "2",
      title: "Home Services",
      description: "Our skilled team offers on-site hardware services to address any technical issues you may encounter at your home.",
      image: "assets/img/bulb.png",
      category: ""
    },
    {
      id: "3",
      title: "Software Development",
      description: "Whether it's web development, software development, or any other development-related inquiries, we are here to assist you.",
      image: "assets/img/bulb.png",
      category: ""
    },
    {
      id: "4",
      title: "Trouble shoot",
      description: "Our team is ready to provide assistance and troubleshooting support for any issues you may encounter.",
      image: "assets/img/bulb.png",
      category: ""
    },
    {
      id: "5",
      title: "App Development",
      description: "Our team is skilled in developing custom applications tailored to your specific requirements.",
      image: "assets/img/bulb.png",
      category: ""
    },
    {
      id: "6",
      title: "Trainings",
      description: "Our services extend to providing training and online courses focused on various aspects of development.",
      image: "assets/img/bulb.png",
      category: ""
    }
  ];
  currentService?: Service;
  currentIndex = -1;
  title = '';

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.retrieveServices();
  }

  retrieveServices(): void {
    this.servicesService.getAll()
      .subscribe(
        data => {
          this.services = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveServices();
    this.currentService = undefined;
    this.currentIndex = -1;
  }

  setActiveService(service: Service, index: number): void {
    this.currentService = service;
    this.currentIndex = index;
  }

  removeAllServices(): void {
    this.servicesService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.servicesService.findByTitle(this.title)
      .subscribe(
        data => {
          this.services = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  filterByCategory(id: string) {
    // this.retrieveServices();
    this.services = id ? this.allServices?.filter(service => { return service.id === id }) : this.allServices;
  }
}
