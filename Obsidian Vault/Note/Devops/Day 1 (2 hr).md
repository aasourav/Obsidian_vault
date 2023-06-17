## (Sat June 17)

if we want to need help on **Linux command** 
type
		`man which_command_we_want_to_explore`
this command will show me the documentation of this command.
`man -k "what you want to search"`

` /search_keyword`   ,   `shift + ` next result
search backward `?search_keyword`

press `g` to go first line of the page

`type command`  it will show me this command is shell build in or executable file or a shell build in . 
if it's show `alias is a shell builtin`

`help shell_builtin_command`   `man` command is only for executable command , and `help` is for builtin commands doc.

another way for common -  `command --help`


## Linux command structure
`ping`  command is used test the network connectivity to destination host.

`command command_options options_value command_argument`
ex: `ping -c 1 google.com`

`df` command is for displays information about the file system and the disk space use it.

## keyboard shortcut

`ctrl + L`  => clear the terminal
`ctrl + d` => exit the terminal
`ctrl + A` => go to the beginning of the line
`up arrow key` prev command
`ctrl + e` => move the cursor to the end
`ctrl + u` => clear the line.
`ctrl + c` => interrupt the command that is running process
`ctrl + g` => pause the running process. we can resume it later using `bg %1`

## bash command history

`cat .bash_history`  => will display the history or `hiostory`
`echo $HISTFILESIZE`  => will return total number of history
	`echo ` 
 
