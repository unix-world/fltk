var index =
[
    [ "Preface", "preface.html", [
      [ "Organization", "preface.html#preface_organisation", null ],
      [ "Conventions", "preface.html#preface_conventions", null ],
      [ "Abbreviations", "preface.html#preface_abbreviations", null ],
      [ "Copyrights and Trademarks", "preface.html#preface_copyrights", null ]
    ] ],
    [ "Introduction to FLTK", "intro.html", [
      [ "History of FLTK", "intro.html#intro_history", null ],
      [ "Features", "intro.html#intro_features", null ],
      [ "Licensing", "intro.html#intro_licensing", null ],
      [ "What Does \"FLTK\" Mean?", "intro.html#intro_what", null ],
      [ "FLUID", "intro.html#intro_fluid", null ],
      [ "Building and Installing FLTK with CMake", "intro.html#intro_cmake", null ],
      [ "Building and Installing FLTK Under UNIX and macOS with make", "intro.html#intro_unix", null ],
      [ "Building FLTK Under Microsoft Windows", "intro.html#intro_windows", [
        [ "Free and Commercial Microsoft Visual Studio Versions", "intro.html#intro_msvc", null ],
        [ "Using the Visual C++ DLL Library", "intro.html#intro_msvc_dll", null ],
        [ "GNU toolsets (Cygwin or MinGW) hosted on Windows", "intro.html#intro_cygwin_mingw", null ]
      ] ],
      [ "Internet Resources", "intro.html#intro_internet", null ],
      [ "Reporting Bugs", "intro.html#intro_reporting", null ]
    ] ],
    [ "FLTK Basics", "basics.html", [
      [ "Writing Your First FLTK Program", "basics.html#basics_writing", [
        [ "Creating the Widgets", "basics.html#basics_creating", null ],
        [ "Creating Widget Hierarchies", "basics.html#basics_hierarchies", null ],
        [ "Get/Set Methods", "basics.html#basics_getset", null ],
        [ "Redrawing After Changing Attributes", "basics.html#basics_redrawing", null ],
        [ "Labels", "basics.html#basics_labels", null ],
        [ "Showing the Window", "basics.html#basics_showing", null ],
        [ "The Main Event Loop", "basics.html#basics_eventloop", null ]
      ] ],
      [ "Naming Conventions", "basics.html#basics_naming", null ],
      [ "Header Files", "basics.html#basics_headerfiles", null ],
      [ "Compiling Programs that Use FLTK", "basics.html#basics_compiling", [
        [ "Compiling Programs with Standard Compilers", "basics.html#basics_standard_compiler", null ],
        [ "Compiling Programs with the 'fltk-config' Script", "basics.html#basics_fltk_config", null ],
        [ "Compiling Multiple Source Files with 'fltk-config'", "basics.html#basics_fltk_config2", null ],
        [ "Compiling Programs with Makefiles", "basics.html#basics_makefile", null ],
        [ "Compiling Programs with Microsoft Visual C++", "basics.html#basics_visual_cpp", null ]
      ] ]
    ] ],
    [ "Common Widgets and Attributes", "common.html", [
      [ "Buttons", "common.html#common_buttons", null ],
      [ "Text", "common.html#common_text", null ],
      [ "Valuators", "common.html#common_valuators", null ],
      [ "Groups", "common.html#common_groups", null ],
      [ "Setting the Size and Position of Widgets", "common.html#common_sizeposition", null ],
      [ "Colors", "common.html#common_colors", null ],
      [ "Box Types", "common.html#common_boxtypes", [
        [ "Making Your Own Boxtypes", "common.html#common_custom_boxtypes", null ]
      ] ],
      [ "Labels and Label Types", "common.html#common_labels", null ],
      [ "Callbacks", "common.html#common_callbacks", null ],
      [ "When and Reason", "common.html#common_when", null ],
      [ "Shortcuts", "common.html#common_shortcuts", null ]
    ] ],
    [ "Coordinates and Layout Widgets", "coordinates.html", [
      [ "The Widget Coordinate System", "coordinates.html#coordinates_coordinates", null ],
      [ "Layout and Container Widgets", "coordinates.html#coordinate_layout", [
        [ "The Fl_Flex Layout Widget", "coordinates.html#coordinates_flex", null ],
        [ "The Fl_Grid Layout Widget", "coordinates.html#coordinates_grid", null ],
        [ "The Fl_Pack Layout Widget", "coordinates.html#coordinates_pack", null ],
        [ "The Fl_Scroll Container Widget", "coordinates.html#coordinates_scroll", null ],
        [ "The Fl_Tabs Container Widget", "coordinates.html#coordinates_tabs", null ],
        [ "The Fl_Tile Layout Widget", "coordinates.html#coordinates_tile", null ],
        [ "The Fl_Wizard Container Widget", "coordinates.html#coordinates_wizard", null ]
      ] ]
    ] ],
    [ "How Does Resizing Work?", "resize.html", [
      [ "Resizing can be disabled", "resize.html#resize_disabled", null ],
      [ "Resizing can be simple", "resize.html#resize_simple", null ],
      [ "Resizing can be complex", "resize.html#resize_complex", null ],
      [ "Practical examples", "resize.html#resize_practical", null ]
    ] ],
    [ "Designing a Simple Text Editor", "editor.html", [
      [ "Determining the Goals of the Text Editor", "editor.html#editor_goals", null ],
      [ "Chapter 1: A Minimal App", "editor.html#editor_main_window", null ],
      [ "Chapter 2: Adding a Menu Bar", "editor.html#editor_main_menu", null ],
      [ "Chapter 3: Adding a Text Editor widget", "editor.html#editor_text_widget", null ],
      [ "Chapter 4: Reading and Writing Files", "editor.html#editor_file_support", null ],
      [ "Chapter 5: Cut, Copy, and Paste", "editor.html#editor_cut_copy_paste", null ],
      [ "Chapter 6: Find and Find Next", "editor.html#editor_find", null ],
      [ "Chapter 7: Replace and Replace Next", "editor.html#editor_replace", null ],
      [ "Chapter 8: Editor Features", "editor.html#editor_editor_features", null ],
      [ "Chapter 9: Split Editor", "editor.html#editor_split_editor", null ],
      [ "Chapter 10: Syntax Highlighting", "editor.html#editor_syntax_highlighting", null ]
    ] ],
    [ "Drawing Things in FLTK", "drawing.html", [
      [ "When Can You Draw Things in FLTK?", "drawing.html#drawing_WhenCanYouDraw", null ],
      [ "What Units Do FLTK Functions Use?", "drawing.html#drawing_DrawingUnit", null ],
      [ "Drawing Functions", "drawing.html#drawing_DrawingFunctions", [
        [ "Boxes", "drawing.html#drawing_boxes", null ],
        [ "Clipping", "drawing.html#drawing_clipping", null ],
        [ "Colors", "drawing.html#drawing_colors", null ],
        [ "Color Contrast", "drawing.html#drawing_contrast", null ],
        [ "Line Dashes and Thickness", "drawing.html#drawing_lines", null ],
        [ "Drawing Fast Shapes", "drawing.html#drawing_fast", null ],
        [ "Drawing Complex Shapes", "drawing.html#drawing_complex", null ],
        [ "Drawing Text", "drawing.html#drawing_text", null ],
        [ "Fonts", "drawing.html#drawing_fonts", null ],
        [ "Character Encoding", "drawing.html#drawing_character_encoding", null ],
        [ "Drawing Overlays", "drawing.html#drawing_overlay", null ]
      ] ],
      [ "Drawing Images", "drawing.html#drawing_images", [
        [ "Direct Image Drawing", "drawing.html#drawing_direct_image_drawing", null ],
        [ "Direct Image Reading", "drawing.html#drawing_direct_image_reading", null ],
        [ "Image Classes", "drawing.html#drawing_Fl_Image", null ]
      ] ],
      [ "Offscreen Drawing", "drawing.html#drawing_offscreen", null ]
    ] ],
    [ "Handling Events", "events.html", [
      [ "The FLTK Event Model", "events.html#events_model", null ],
      [ "Mouse Events", "events.html#events_mouse", [
        [ "FL_PUSH", "events.html#events_fl_push", null ],
        [ "FL_DRAG", "events.html#events_fl_drag", null ],
        [ "FL_RELEASE", "events.html#events_fl_release", null ],
        [ "FL_MOVE", "events.html#events_fl_move", null ],
        [ "FL_MOUSEWHEEL", "events.html#events_fl_mousewheel", null ]
      ] ],
      [ "Focus Events", "events.html#events_focus", [
        [ "FL_ENTER", "events.html#events_fl_enter", null ],
        [ "FL_LEAVE", "events.html#events_fl_leave", null ],
        [ "FL_FOCUS", "events.html#events_fl_focus", null ],
        [ "FL_UNFOCUS", "events.html#events_fl_unfocus", null ]
      ] ],
      [ "Keyboard Events", "events.html#events_keyboard", [
        [ "FL_KEYBOARD, FL_KEYDOWN, FL_KEYUP", "events.html#events_fl_keydown", null ],
        [ "FL_SHORTCUT", "events.html#events_fl_shortcut", null ]
      ] ],
      [ "Widget Events", "events.html#events_widget", [
        [ "FL_DEACTIVATE", "events.html#events_fl_deactivate", null ],
        [ "FL_ACTIVATE", "events.html#events_fl_activate", null ],
        [ "FL_HIDE", "events.html#events_fl_hide", null ],
        [ "FL_SHOW", "events.html#events_fl_show", null ]
      ] ],
      [ "Clipboard Events", "events.html#events_clipboard", [
        [ "FL_PASTE", "events.html#events_fl_paste", null ],
        [ "FL_SELECTIONCLEAR", "events.html#events_fl_selectionclear", null ]
      ] ],
      [ "Drag and Drop Events", "events.html#events_dnd", [
        [ "Dropped filenames", "events.html#events_fl_dnd_files", null ],
        [ "FL_DND_ENTER", "events.html#events_fl_dnd_enter", null ],
        [ "FL_DND_DRAG", "events.html#events_fl_dnd_drag", null ],
        [ "FL_DND_LEAVE", "events.html#events_fl_dnd_leave", null ],
        [ "FL_DND_RELEASE", "events.html#events_fl_dnd_release", null ]
      ] ],
      [ "Other events", "events.html#events_fl_misc", [
        [ "FL_SCREEN_CONFIGURATION_CHANGED", "events.html#events_fl_screen_config", null ],
        [ "FL_FULLSCREEN", "events.html#events_fl_fullscreen", null ]
      ] ],
      [ "Fl::event_*() methods", "events.html#events_event_xxx", null ],
      [ "Event Propagation", "events.html#events_propagation", null ],
      [ "FLTK Compose-Character Sequences", "events.html#events_compose_characters", null ]
    ] ],
    [ "Adding and Extending Widgets", "subclassing.html", [
      [ "Subclassing", "subclassing.html#subclassing_subclassing", null ],
      [ "Making a Subclass of Fl_Widget", "subclassing.html#subclassing_fl_widget", null ],
      [ "The Constructor", "subclassing.html#subclassing_constructor", null ],
      [ "Protected Methods of Fl_Widget", "subclassing.html#subclassing_protected", null ],
      [ "Handling Events", "subclassing.html#subclassing_events", null ],
      [ "Drawing the Widget", "subclassing.html#subclassing_drawing", null ],
      [ "Resizing the Widget", "subclassing.html#subclassing_resizing", null ],
      [ "Making a Composite Widget", "subclassing.html#subclassing_composite", null ],
      [ "Cut and Paste Support", "subclassing.html#subclassing_cutnpaste", null ],
      [ "Drag And Drop Support", "subclassing.html#subclassing_dragndrop", null ],
      [ "Making a subclass of Fl_Window", "subclassing.html#subclassing_fl_window", null ]
    ] ],
    [ "Using OpenGL", "opengl.html", [
      [ "Using OpenGL in FLTK", "opengl.html#opengl_using", null ],
      [ "Making a Subclass of Fl_Gl_Window", "opengl.html#opengl_subclass", [
        [ "Defining the Subclass", "opengl.html#opengl_defining", null ],
        [ "The draw() Method", "opengl.html#opengl_draw", null ],
        [ "The handle() Method", "opengl.html#opengl_handle", null ]
      ] ],
      [ "OpenGL and support of HighDPI displays", "opengl.html#opengl_highdpi", null ],
      [ "Using OpenGL in Normal FLTK Windows", "opengl.html#opengl_normal", null ],
      [ "Using FLTK widgets in OpenGL Windows", "opengl.html#opengl_with_fltk_widgets", null ],
      [ "OpenGL Drawing Functions", "opengl.html#opengl_drawing", null ],
      [ "Speeding up OpenGL", "opengl.html#opengl_speed", null ],
      [ "Using OpenGL Optimizer with FLTK", "opengl.html#opengl_optimizer", null ],
      [ "Using OpenGL 3.0 (or higher versions)", "opengl.html#opengl3", null ]
    ] ],
    [ "FLTK Runtime Options", "fltk-options.html", [
      [ "Runtime Options", "fltk-options.html#fltk-options_basics", null ],
      [ "Obtaining Current Settings", "fltk-options.html#fltk-options_access", null ],
      [ "Administrative Tool", "fltk-options.html#fltk-options_app", null ],
      [ "List of Options", "fltk-options.html#fltk-options_options", null ]
    ] ],
    [ "Advanced FLTK", "advanced.html", [
      [ "Multithreading", "advanced.html#advanced_multithreading", null ],
      [ "FLTK multithread locking - Fl::lock() and Fl::unlock()", "advanced.html#advanced_multithreading_lock", null ],
      [ "Simple multithreaded examples using Fl::lock", "advanced.html#advanced_multithreading_lock_example", null ],
      [ "FLTK multithreaded \"lockless programming\"", "advanced.html#advanced_multithreading_lockless", null ],
      [ "FLTK multithreaded Constraints", "advanced.html#advanced_multithreading_caveats", null ]
    ] ],
    [ "Unicode and UTF-8 Support", "unicode.html", [
      [ "About Unicode, ISO 10646 and UTF-8", "unicode.html#unicode_about", null ],
      [ "Unicode in FLTK", "unicode.html#unicode_in_fltk", null ],
      [ "Illegal Unicode and UTF-8 Sequences", "unicode.html#unicode_illegals", null ],
      [ "FLTK Unicode and UTF-8 Functions", "unicode.html#unicode_fltk_calls", null ],
      [ "FLTK Unicode Versions of System Calls", "unicode.html#unicode_system_calls", null ]
    ] ],
    [ "Constants and Enumerations", "enumerations.html", [
      [ "Version Numbers", "enumerations.html#enumerations_versions", null ],
      [ "Events", "enumerations.html#enumerations_events", null ],
      [ "Callback \"When\" Conditions", "enumerations.html#enumerations_when", null ],
      [ "Fl::event_button() Values", "enumerations.html#enumeration_button_values", null ],
      [ "Fl::event_key() Values", "enumerations.html#enumerations_event_key", null ],
      [ "Fl::event_state() Values", "enumerations.html#enumerations_event_state", null ],
      [ "Alignment Values", "enumerations.html#enumerations_alignment", null ],
      [ "Fonts", "enumerations.html#enumerations_fonts", null ],
      [ "Colors", "enumerations.html#enumerations_colors", [
        [ "Color Constants", "enumerations.html#enumerations_color_constants", null ]
      ] ],
      [ "Cursors", "enumerations.html#enumerations_cursors", null ],
      [ "FD \"When\" Conditions", "enumerations.html#enumerations_file_when", null ],
      [ "Damage Masks", "enumerations.html#enumerations_damage", null ]
    ] ],
    [ "GLUT Compatibility", "glut.html", [
      [ "Using the GLUT Compatibility Header File", "glut.html#glut_using", null ],
      [ "Known Problems", "glut.html#glut_known_problems", null ],
      [ "Mixing GLUT and FLTK Code", "glut.html#glut_mixing", null ],
      [ "class Fl_Glut_Window", "glut.html#glut_Fl_Glut_Window", [
        [ "Class Hierarchy", "glut.html#glut_class_hierarchy", null ],
        [ "Include Files", "glut.html#glut_include_files", null ],
        [ "Description", "glut.html#glut_description", null ],
        [ "Members", "glut.html#glut_members", null ],
        [ "Methods", "glut.html#glut_methods", null ]
      ] ]
    ] ],
    [ "Forms Compatibility", "forms.html", [
      [ "Importing Forms Layout Files", "forms.html#forms_importing", null ],
      [ "Using the Compatibility Header File", "forms.html#forms_using", null ],
      [ "Problems You Will Encounter", "forms.html#forms_problems", null ],
      [ "Additional Notes", "forms.html#forms_notes", null ]
    ] ],
    [ "Operating System Issues", "osissues.html", [
      [ "Accessing the OS Interfaces", "osissues.html#osissues_accessing", null ],
      [ "The Wayland/X11 hybrid library", "osissues.html#osissues_wl_x11_hybrid", null ],
      [ "The UNIX (X11) Interface", "osissues.html#osissues_unix", [
        [ "Handling Other X Events", "osissues.html#osissues_x_events", null ],
        [ "Drawing using Xlib", "osissues.html#osissues_drawing_xlib", null ],
        [ "Changing the Display, Screen, or X Visual", "osissues.html#osissues_xvisual", null ],
        [ "Using a Subclass of Fl_Window for Special X Stuff", "osissues.html#osissues_specialx", null ],
        [ "Setting the Icon of a Window", "osissues.html#osissues_x_icon", null ],
        [ "X Resources", "osissues.html#osissues_xresources", null ],
        [ "Display Scaling Factor", "osissues.html#osissues_x_scaling", null ]
      ] ],
      [ "The Windows Interface", "osissues.html#osissues_win32", [
        [ "Using filenames with non-ASCII characters", "osissues.html#non_ascii_filenames", null ],
        [ "Responding to WM_QUIT", "osissues.html#osissues_wm_quit", null ],
        [ "Handling Other Windows API Messages", "osissues.html#osissues_win32_messages", null ],
        [ "Drawing Things Using the Windows GDI", "osissues.html#osissues_win32_gdi", null ],
        [ "HighDPI support", "osissues.html#osissues_windows_highdpi", null ],
        [ "Display Scaling Factor", "osissues.html#osissues_windows_scaling", null ],
        [ "Setting the Icon of a Window", "osissues.html#osissues_icon_windows", null ],
        [ "How to Not Get a MSDOS Console Window", "osissues.html#osissues_msdos_console", null ],
        [ "Known Windows Bugs and Problems", "osissues.html#osissues_win32_problems", null ]
      ] ],
      [ "The Apple OS X Interface", "osissues.html#osissues_macos", [
        [ "Setting the icon of an application", "osissues.html#osissues_icon_osx", null ],
        [ "Drawing Things Using Quartz", "osissues.html#osissues_quartz", null ],
        [ "Internationalization", "osissues.html#osissues_localize", null ],
        [ "OpenGL and 'retina' displays", "osissues.html#osissues_retina", null ],
        [ "Fl_Double_Window", "osissues.html#double_window", null ],
        [ "Mac File System Specifics", "osissues.html#osissues_mac_files", null ]
      ] ],
      [ "The Wayland Interface", "osissues.html#osissues_wayland", [
        [ "HiDPI display support", "osissues.html#osissues_wayland_scaling", null ],
        [ "Window icons", "osissues.html#osissues_wayland_window_icon", null ],
        [ "Window titlebars", "osissues.html#osissues_wayland_decoration", null ]
      ] ]
    ] ],
    [ "Migrating Code from FLTK 1.3 to 1.4", "migration_1_4.html", [
      [ "Changes in Header Files", "migration_1_4.html#migration_1_4_headers", null ],
      [ "Fl_Preferences", "migration_1_4.html#migration_1_4_preferences", null ],
      [ "Fl::add_timeout and friends", "migration_1_4.html#migration_1_4_timeout", null ],
      [ "New FL_OVERRIDE Macro", "migration_1_4.html#migration_1_4_fl_override", null ],
      [ "Fl_Image::copy() 'const'", "migration_1_4.html#migration_1_4_copy_image", null ],
      [ "Using X11 specific code with a \"hybrid\" FLTK library", "migration_1_4.html#migration_1_4_x11_compat", null ],
      [ "Modern CMake", "migration_1_4.html#migration_1_4_modern_cmake", null ],
      [ "New FL_HELVETICA Font on Windows", "migration_1_4.html#migration_1_4_windows_font", null ]
    ] ],
    [ "Software License", "license.html", null ],
    [ "Example Source Code", "examples.html", [
      [ "Example Applications: Overview", "examples.html#example_applications_overview", [
        [ "adjuster", "examples.html#examples_adjuster", null ],
        [ "animated", "examples.html#examples_animated", null ],
        [ "arc", "examples.html#examples_arc", null ],
        [ "ask", "examples.html#examples_ask", null ],
        [ "bitmap", "examples.html#examples_bitmap", null ],
        [ "blocks", "examples.html#examples_blocks", null ],
        [ "boxtype", "examples.html#examples_boxtype", null ],
        [ "browser", "examples.html#examples_browser", null ],
        [ "button", "examples.html#examples_button", null ],
        [ "buttons", "examples.html#examples_buttons", null ],
        [ "cairo_test", "examples.html#examples_cairo_test", null ],
        [ "checkers", "examples.html#examples_checkers", null ],
        [ "clipboard", "examples.html#examples_clipboard", null ],
        [ "clock", "examples.html#examples_clock", null ],
        [ "colbrowser", "examples.html#examples_colbrowser", null ],
        [ "color_chooser", "examples.html#examples_color_chooser", null ],
        [ "cube", "examples.html#examples_cube", null ],
        [ "CubeView", "examples.html#examples_CubeView", null ],
        [ "cursor", "examples.html#examples_cursor", null ],
        [ "curve", "examples.html#examples_curve", null ],
        [ "demo", "examples.html#examples_demo", null ],
        [ "device", "examples.html#examples_device", null ],
        [ "doublebuffer", "examples.html#examples_doublebuffer", null ],
        [ "editor", "examples.html#examples_editor", null ],
        [ "fast_slow", "examples.html#examples_fast_slow", null ],
        [ "file_chooser", "examples.html#examples_file_chooser", null ],
        [ "fonts", "examples.html#examples_fonts", null ],
        [ "forms", "examples.html#examples_forms", null ],
        [ "fractals", "examples.html#examples_fractals", null ],
        [ "fullscreen", "examples.html#examples_fullscreen", null ],
        [ "gl_overlay", "examples.html#examples_gl_overlay", null ],
        [ "glpuzzle", "examples.html#examples_glpuzzle", null ],
        [ "hello", "examples.html#examples_hello", null ],
        [ "help_dialog", "examples.html#examples_help_dialog", null ],
        [ "icon", "examples.html#examples_icon", null ],
        [ "iconize", "examples.html#examples_iconize", null ],
        [ "image", "examples.html#examples_image", null ],
        [ "inactive", "examples.html#examples_inactive", null ],
        [ "input", "examples.html#examples_input", null ],
        [ "input_choice", "examples.html#examples_input_choice", null ],
        [ "keyboard", "examples.html#examples_keyboard", null ],
        [ "label", "examples.html#examples_label", null ],
        [ "line_style", "examples.html#examples_line_style", null ],
        [ "list_visuals", "examples.html#examples_list_visuals", null ],
        [ "mandelbrot", "examples.html#examples_mandelbrot", null ],
        [ "menubar", "examples.html#examples_menubar", null ],
        [ "message", "examples.html#examples_message", null ],
        [ "minimum", "examples.html#examples_minimum", null ],
        [ "native-filechooser", "examples.html#examples_native-filechooser", null ],
        [ "navigation", "examples.html#examples_navigation", null ],
        [ "offscreen", "examples.html#examples_offscreen", null ],
        [ "output", "examples.html#examples_output", null ],
        [ "overlay", "examples.html#examples_overlay", null ],
        [ "pack", "examples.html#examples_pack", null ],
        [ "pixmap", "examples.html#examples_pixmap", null ],
        [ "pixmap_browser", "examples.html#examples_pixmap_browser", null ],
        [ "preferences", "examples.html#examples_preferences", null ],
        [ "radio", "examples.html#examples_radio", null ],
        [ "resizebox", "examples.html#examples_resizebox", null ],
        [ "rotated_text", "examples.html#examples_rotated_text", null ],
        [ "resize", "examples.html#examples_resize", null ],
        [ "scroll", "examples.html#examples_scroll", null ],
        [ "shape", "examples.html#examples_shape", null ],
        [ "subwindow", "examples.html#examples_subwindow", null ],
        [ "sudoku", "examples.html#examples_sudoku", null ],
        [ "symbols", "examples.html#examples_symbols", null ],
        [ "table", "examples.html#examples_table", null ],
        [ "tabs", "examples.html#examples_tabs", null ],
        [ "threads", "examples.html#examples_threads", null ],
        [ "tile", "examples.html#examples_tile", null ],
        [ "tiled_image", "examples.html#examples_tiled_image", null ],
        [ "tree", "examples.html#examples_tree", null ],
        [ "twowin", "examples.html#examples_twowin", null ],
        [ "unittests", "examples.html#examples_unittests", null ],
        [ "utf8", "examples.html#examples_utf8", null ],
        [ "valuators", "examples.html#examples_valuators", null ],
        [ "windowfocus", "examples.html#examples_windowfocus", null ],
        [ "FLUID", "examples.html#examples_fluid", null ]
      ] ],
      [ "Example Applications: Images", "examples.html#example_applications_images", [
        [ "cairo_test", "examples.html#examples_cairo_test_image", null ],
        [ "icon", "examples.html#examples_icon_image", null ],
        [ "unittests", "examples.html#examples_unittests_images", null ]
      ] ]
    ] ],
    [ "FAQ (Frequently Asked Questions)", "FAQ.html", [
      [ "Where do I start learning FLTK?", "FAQ.html#faq_start", null ],
      [ "How do I make a box with text?", "FAQ.html#faq_box_with_text", null ],
      [ "Can I use FLTK to make closed-source commercial applications?", "FAQ.html#faq_license", null ],
      [ "Hitting the 'Escape' key closes windows - how do I prevent this?", "FAQ.html#faq_escape", null ]
    ] ]
];