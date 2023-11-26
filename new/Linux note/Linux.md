## `What is process?`
  - Is a running instance of a programm.
  - When you open an application or run a command in the terminal, it becomes a process. Each process has its own unique ID called a PID (Process ID).
##  `What is daemon?`
* In Linux, daemons are background processes that run without direct user interaction and perform specific tasks or services. They're often initiated during the system boot and continue to run until the system is shut down.


## `What is cgroup?`
*   Control Groups (cgroups) in Linux are a kernel feature that allows you to allocate resources—such as CPU, memory, disk I/O, and network bandwidth—among processes or groups of processes.


## `About init?`
* `init` in Linux refers to the initialization process, which is the first process started by the kernel when the system boots. It's assigned the process ID (PID) 1 and is responsible for starting and managing other processes.
*   it's a deamon process. 
* It’s an ancestor process to all processes. It also adopts orphaned or zombie processes. That is, after a child loses its parent, the init process becomes its new parent.
*  what happens when the init process doesn’t start first (the kernel doesn’t boot the init process)? A kernel panic occurs because there isn’t an init process to startup things and make way for essential services.
* to learn more: https://www.section.io/engineering-education/understanding-systemd/
* 