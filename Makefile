md_dir = md
public_dir = public
static_dir = static
layout_dir = layout

md_files = $(shell find $(md_dir) -type f)
md_subdir = $(shell find $(md_dir)/* -type d)
static_files = $(shell find $(static_dir) -type f)
static_subdir = $(shell find $(static_dir)/* -type d)

html_files = $(patsubst $(md_dir)/%.md,$(public_dir)/%.html,$(md_files))
html_subdir = $(patsubst $(md_dir)/%,$(public_dir)/%,$(md_subdir))

index_md = $(filter %index.md,$(md_files))
index_html = $(patsubst $(md_dir)/%.md,$(public_dir)/%.html,$(index_md))

public_static_files = $(patsubst $(static_dir)/%,$(public_dir)/%,$(static_files))
public_static_subdir = $(patsubst $(static_dir)/%,$(public_dir)/%,$(static_subdir))

.PHONY: all
all: $(html_subdir) $(public_static_subdir) $(html_files) $(public_static_files)
	@echo ""
	@echo "All file done"

$(public_dir)/%: $(layout_dir)/%.html
	@rm -rf $@
	@mkdir -vp $@

$(public_dir)/%.html: $(md_dir)/%.md
	@bash build $< $@

$(public_dir)/%ndex.html: $(md_dir)/%ndex.md $(layout_dir)/main.html
	@bash build $< $@

$(public_static_subdir):
	@mkdir -vp $@

$(public_dir)/%: $(static_dir)/%
	@cp -v $< $@


clean:
	@echo "Clean public directory"
	@rm -rf $(public_dir)/*
